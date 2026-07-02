/* FM BOARDS — user store：Supabase認証 ＋ 個人の解答履歴
   （未ログイン時は localStorage、ログイン時は Supabase に保存）
   ※このファイルの値（URL・publishableキー）はブラウザに公開されて問題ないものです。 */
(function () {
  // ===== あなたのプロジェクトの値（設定済み） =====
  const SUPABASE_URL = "https://pptxeutnosgacovtvtkp.supabase.co";                 // Project URL（/rest/v1/ は付けない）
  const SUPABASE_KEY = "sb_publishable_rYuQgenibvay-0ylb6nC1g_Gcuk2azE";           // Publishable key（公開OK）

  // supabase-js（CDN）が読み込めていなければ、何もせず終了（アプリ本体はそのまま動く）
  if (!window.supabase || !window.supabase.createClient) {
    console.warn("[FMBStore] supabase-js が読み込めませんでした。履歴保存は無効のまま、問題演習は通常どおり動作します。");
    return;
  }

  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  let user = null;
  const listeners = [];
  const notify = () => listeners.forEach(f => { try { f(); } catch (e) {} });

  // --- 未ログイン時の保存先（localStorage） ---
  const LS = "fmb_attempts";
  const lsAll = () => { try { return JSON.parse(localStorage.getItem(LS) || "[]"); } catch (e) { return []; } };
  const lsAdd = a => { const x = lsAll(); x.push(a); try { localStorage.setItem(LS, JSON.stringify(x)); } catch (e) {} };

  const FMBStore = {
    getUser: () => user,
    onChange: fn => listeners.push(fn),

    // 解答を1件記録
    async recordAttempt(questionId, chosen, correct) {
      if (user) {
        try { await sb.from("attempts").insert({ question_id: String(questionId), chosen: chosen, correct: !!correct }); }
        catch (e) { console.error("[FMBStore] save failed", e); }
      } else {
        lsAdd({ question_id: String(questionId), chosen: chosen, correct: !!correct, answered_at: new Date().toISOString() });
      }
    },

    // この人の全履歴を取得（未ログインなら localStorage）
    async getHistory() {
      if (user) {
        const { data, error } = await sb.from("attempts")
          .select("question_id,chosen,correct,answered_at")
          .order("answered_at", { ascending: true });
        if (error) { console.error("[FMBStore] load failed", error); return []; }
        return data || [];
      }
      return lsAll();
    },

    async signIn(email) {
      const { error } = await sb.auth.signInWithOtp({
        email: email,
        options: { emailRedirectTo: location.href.split("#")[0] }
      });
      return error ? error.message : null;
    },
    async signOut() { await sb.auth.signOut(); },
  };

  // ログイン時：localStorage に貯めた分をクラウドへ移して消す（1回だけ）
  async function migrate() {
    const local = lsAll();
    if (!local.length) return;
    const rows = local.map(a => ({ question_id: a.question_id, chosen: a.chosen, correct: !!a.correct, answered_at: a.answered_at }));
    try { const { error } = await sb.from("attempts").insert(rows); if (!error) localStorage.removeItem(LS); }
    catch (e) { console.error("[FMBStore] migrate failed", e); }
  }

  // ヘッダーのログイン表示（まずは最小構成。あとで綺麗にできます）
  function renderAuth() {
    const el = document.getElementById("auth"); if (!el) return;
    if (user) {
      el.innerHTML = user.email + ' · <a href="#" id="logout" style="color:var(--neon-2)">ログアウト</a>';
      const b = document.getElementById("logout");
      if (b) b.onclick = e => { e.preventDefault(); FMBStore.signOut(); };
    } else {
      el.innerHTML = '<a href="#" id="login" style="color:var(--neon-2)">進捗を保存（ログイン）</a>';
      const b = document.getElementById("login");
      if (b) b.onclick = async e => {
        e.preventDefault();
        const email = prompt("ログイン用のメールアドレスを入力してください");
        if (!email) return;
        const err = await FMBStore.signIn(email.trim());
        alert(err ? ("エラー: " + err) : "ログイン用リンクをメールに送りました。届いたメール内のリンクを開くとログインされます。");
      };
    }
  }
  FMBStore.onChange(renderAuth);

  // 認証状態の変化を監視
  sb.auth.onAuthStateChange(async (_e, session) => {
    const was = user;
    user = (session && session.user) ? session.user : null;
    if (!was && user) await migrate();   // 未ログイン→ログインの瞬間に移行
    notify();
  });

  // 起動時のセッション確認（マジックリンクで戻ってきた場合もここで拾われる）
  sb.auth.getSession().then(({ data }) => {
    user = (data.session && data.session.user) ? data.session.user : null;
    notify();
  });

  window.FMBStore = FMBStore;
})();
