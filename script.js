/* =========================================================
   Jiaoxi LuxStay — 資料與互動
   ========================================================= */

// ---------- 10 大飯店資料庫（價格為參考起價） ----------
const HOTELS = [
  {
    id: 1, name: "礁溪老爺酒店", tag: "五星奢華度假首選",
    pools: "野天風呂（草本 / 能量水療 / 溫泉魚）、無邊際觀景泳池",
    audience: "親子家庭、高端度假", location: "火車站車行 10 分鐘，提供接駁", walk: null,
    copy: "坐擁蘭陽平原無敵景致，結合四大主題野天風呂與溫泉魚足浴，享受頂級度假奢華。",
    price: 12800, unit: "晚", vibes: ["family"], features: ["infinity", "kids"],
    matrix: {
      roomPool: "房內溫泉浴池，可眺望蘭陽平原",
      publicBath: "四大主題野天風呂",
      kids: "溫泉魚足浴、無邊際觀景泳池",
      dining: "館內多元餐廳，住宿附早餐",
      transport: "火車站車行 10 分鐘・提供接駁車",
    },
  },
  {
    id: 2, name: "礁溪寒沐酒店", tag: "當代美學文旅",
    pools: "光之湯男女裸湯、簡約高雅客房湯池",
    audience: "情侶輕奢、重視設計感族群", location: "距火車站步行 10 分鐘", walk: 10,
    copy: "寒舍集團美學力作，以自然木質與光影交織出光之湯裸湯，完美兼具現代感與私密放鬆體驗。",
    price: 9800, unit: "晚", vibes: ["couple", "nocar"], features: ["nude", "walk"],
    matrix: {
      roomPool: "簡約高雅客房湯池（木質調）",
      publicBath: "光之湯男女分池裸湯",
      kids: "—",
      dining: "集團級餐飲，住宿附早餐",
      transport: "火車站步行 10 分鐘",
    },
  },
  {
    id: 3, name: "長榮鳳凰酒店（礁溪）", tag: "親子享樂天堂",
    pools: "慢活 SPA 水療區、寬敞日式石造浴池",
    audience: "親子家庭、三代同堂", location: "距礁溪火車站步行 5 分鐘", walk: 5,
    copy: "豐富的慢活 SPA 與道地日式浴衣體驗，房內湯池寬敞舒適，讓全家大小在歡樂氛圍中徹底釋放壓力。",
    price: 8600, unit: "晚", vibes: ["family", "nocar"], features: ["kids", "walk"],
    matrix: {
      roomPool: "寬敞日式石造浴池",
      publicBath: "慢活 SPA 水療區",
      kids: "日式浴衣體驗、適合三代同堂",
      dining: "自助餐廳，住宿附早餐",
      transport: "火車站步行 5 分鐘",
    },
  },
  {
    id: 4, name: "晶泉丰旅", tag: "日式禪風私旅",
    pools: "頂樓瀧月無邊際溫泉泳池、竹林景致私房湯池",
    audience: "情侶約會、輕奢渡假", location: "距火車站步行 5 分鐘", walk: 5,
    copy: "融合日式禪風與竹林造景，頂樓無邊際溫泉泳池遠眺蘭陽夜景，打造極致私密的日系泡湯饗宴。",
    price: 7200, unit: "晚", vibes: ["couple", "nocar"], features: ["infinity", "private", "walk"],
    matrix: {
      roomPool: "竹林景致私房湯池",
      publicBath: "頂樓瀧月無邊際溫泉泳池",
      kids: "—",
      dining: "日式料理，住宿附早餐",
      transport: "火車站步行 5 分鐘",
    },
  },
  {
    id: 5, name: "山形閣", tag: "道地山形文化",
    pools: "日式大眾風呂、房內景觀精緻湯池",
    audience: "日本文化愛好者、質感背包客", location: "距火車站步行 3 分鐘", walk: 3,
    copy: "將日本山形縣正統泡湯文化移轉至礁溪，清水模質感結合無敵窗景，在房內即可細品美人湯之美。",
    price: 5800, unit: "晚", vibes: ["couple", "nocar"], features: ["nude", "walk"],
    matrix: {
      roomPool: "清水模景觀精緻湯池",
      publicBath: "日式大眾風呂",
      kids: "—",
      dining: "日式早餐",
      transport: "火車站步行 3 分鐘（最近）",
    },
  },
  {
    id: 6, name: "呆水溫泉", tag: "隱世森林系美學",
    pools: "森脈房型雙湯池、結合精緻餐點之獨立湯屋",
    audience: "追求極致安靜、私房秘境旅客", location: "近林美石磐步道山麓", walk: null,
    copy: "隱身於綠意山林之間的絕美秘境，極簡建築搭配頂級雙湯池與特色餐點，給予靈魂最深層的洗滌。",
    price: 11800, unit: "晚", vibes: ["couple", "day"], features: ["private"],
    matrix: {
      roomPool: "森脈房型雙湯池",
      publicBath: "—（以獨立湯屋為主）",
      kids: "—",
      dining: "湯屋結合精緻特色餐點",
      transport: "林美石磐步道山麓・建議自駕或計程車",
    },
  },
  {
    id: 7, name: "中天溫泉渡假飯店", tag: "歐風水療旗艦",
    pools: "晴波溫泉 SPA 水療池（沖擊 / 氣泡 / 穴道）、歐風景觀湯屋",
    audience: "親子家庭、重視水療機能旅客", location: "距轉運站車行 5 分鐘", walk: null,
    copy: "氣派的歐式莊園建築，擁有多達十多種專業水療設施的晴波池，滿足全家大小趣味與放鬆兼具的泡湯願望。",
    price: 4600, unit: "晚", vibes: ["family", "day"], features: ["kids", "private"],
    matrix: {
      roomPool: "歐風景觀湯屋",
      publicBath: "晴波 SPA 水療池（著泳衣）",
      kids: "十多種水療設施，大人小孩都好玩",
      dining: "館內餐廳，住宿附早餐",
      transport: "轉運站車行 5 分鐘",
    },
  },
  {
    id: 8, name: "冒煙的石頭溫泉度假旅館", tag: "前衛清水模地標",
    pools: "不規則清水模獨立雙人湯屋、日式禪風空間",
    audience: "建築美學愛好者、打卡族", location: "鄰近湯圍溝公園", walk: null,
    copy: "由知名建築師操刀，獨特清水模外觀如同一顆天然巨石，內裝流線與光影極具張力，是兼具藝術與私密性的泡湯首選。",
    price: 4200, unit: "晚", vibes: ["couple", "day"], features: ["private"],
    matrix: {
      roomPool: "不規則清水模雙人湯池",
      publicBath: "—（以獨立湯屋為主）",
      kids: "—",
      dining: "簡約早餐",
      transport: "鄰近湯圍溝公園",
    },
  },
  {
    id: 9, name: "東旅湯宿溫泉飯店（風華漾）", tag: "新舊交織文青旅宿",
    pools: "嘉賓莊老旅社翻新、日式竹製屏風雙人湯屋",
    audience: "文青網紅、小資情侶", location: "距火車站步行 5 分鐘", walk: 5,
    copy: "由老字號旅社華麗轉身，融合日式拉門、碎石子路與老宅靈魂，在濃厚昭和風情中享受高 CP 值溫泉時光。",
    price: 2880, unit: "晚", vibes: ["couple", "nocar", "day"], features: ["private", "walk"],
    matrix: {
      roomPool: "日式竹製屏風雙人湯屋",
      publicBath: "—",
      kids: "—",
      dining: "輕食早餐",
      transport: "火車站步行 5 分鐘",
    },
  },
  {
    id: 10, name: "礁溪溫泉公園 森林風呂", tag: "高 CP 值日式裸湯",
    pools: "戶外綠意露天裸湯（男女湯定期對調）",
    audience: "小資族、無車背包客、溫泉純粹主義者", location: "位於礁溪溫泉公園內，火車站步行可達", walk: 10,
    copy: "以銅板價格享受宛如日本深山的露天森林裸湯，被綠意環繞的質樸沸騰，是尋求身心徹底放鬆的在地私房推薦。",
    price: 150, unit: "人", vibes: ["nocar", "day"], features: ["nude", "walk"],
    matrix: {
      roomPool: "—（不提供住宿）",
      publicBath: "戶外露天森林裸湯・男女湯定期對調",
      kids: "溫泉公園綠地、泡腳池",
      dining: "—（周邊步行可達美食）",
      transport: "溫泉公園內・火車站步行可達",
    },
  },
];

const VIBE_LABEL = { couple: "💍 情侶私湯", family: "👨‍👩‍👧 親子", nocar: "🚂 無車輕旅", day: "🍵 日歸" };
const FEATURE_LABEL = { nude: "大眾裸湯", infinity: "無邊際池", private: "獨立湯屋", kids: "親子設施", walk: "步行可達" };
const MAX_COMPARE = 4;
const DISCOUNT = 0.85;

// ---------- 工具 ----------
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const fmt = (n) => "$" + n.toLocaleString("en-US");
// 示意圖（自然風景圖庫），正式上線請替換為飯店授權實景照
const PHOTO_POOL = [1018, 28, 15, 11, 128, 17, 10, 116, 29, 190, 94, 124, 16, 110, 142, 95, 54, 177, 76, 118, 173, 106, 129, 152, 167];
const imgUrl = (id, n, w = 800, h = 600) =>
  `https://picsum.photos/id/${PHOTO_POOL[((id - 1) * 3 + n - 1) % PHOTO_POOL.length]}/${w}/${h}`;
const klookUrl = (h) => `https://www.klook.com/zh-TW/search/result/?query=${encodeURIComponent(h.name)}`;
const officialUrl = (h) => `https://www.google.com/search?q=${encodeURIComponent(h.name + " 官網")}`;
const priceBand = (p) => (p < 3000 ? "budget" : p <= 8000 ? "mid" : "lux");
const salePrice = (h) => Math.round((h.price * DISCOUNT) / 10) * 10;

// ---------- 狀態 ----------
const state = {
  vibe: "all",
  price: "all",
  features: new Set(),
  sort: "rank",
  compare: [], // hotel ids
};

// ---------- 篩選與渲染 ----------
function getFiltered() {
  let list = HOTELS.filter((h) => {
    if (state.vibe !== "all" && !h.vibes.includes(state.vibe)) return false;
    if (state.price !== "all" && priceBand(h.price) !== state.price) return false;
    for (const f of state.features) if (!h.features.includes(f)) return false;
    return true;
  });
  const sorters = {
    rank: (a, b) => a.id - b.id,
    priceAsc: (a, b) => a.price - b.price,
    priceDesc: (a, b) => b.price - a.price,
    walk: (a, b) => (a.walk ?? 99) - (b.walk ?? 99),
  };
  return list.sort(sorters[state.sort]);
}

function cardHTML(h, i) {
  const checked = state.compare.includes(h.id);
  const slides = [1, 2, 3]
    .map((n) => `<img src="${imgUrl(h.id, n)}" alt="${h.name} 實景照 ${n}" loading="lazy" onerror="this.style.visibility='hidden'">`)
    .join("");
  const badges = h.vibes.map((v) => `<span class="badge">${VIBE_LABEL[v]}</span>`).join("");
  return `
  <article class="card ${checked ? "is-compared" : ""}" data-id="${h.id}" style="animation-delay:${i * 60}ms">
    <div class="card__media">
      <div class="slides">${slides}</div>
      <div class="dots">${[0, 1, 2].map((d) => `<button aria-label="第 ${d + 1} 張" class="${d === 0 ? "is-active" : ""}" data-dot="${d}"></button>`).join("")}</div>
      <span class="card__rank">${String(h.id).padStart(2, "0")}</span>
      <span class="card__deal">限時 85 折</span>
    </div>
    <div class="card__body">
      <span class="card__tag">${h.tag}</span>
      <h3 class="card__title">${h.name}</h3>
      <p class="card__copy">${h.copy}</p>
      <ul class="card__meta">
        <li><span>♨️</span><span>${h.pools}</span></li>
        <li><span>👥</span><span>${h.audience}</span></li>
        <li><span>📍</span><span>${h.location}</span></li>
      </ul>
      <div class="badges">${badges}</div>
      <div class="card__foot">
        <div class="price">
          <small>Klook 折扣中</small>
          <del>${fmt(h.price)}</del><strong>${fmt(salePrice(h))}</strong> <span>起 / ${h.unit}</span>
        </div>
        <label class="compare-toggle">
          <input type="checkbox" data-compare="${h.id}" ${checked ? "checked" : ""}> 加入比較
        </label>
      </div>
      <div class="card__cta">
        <a class="btn btn--accent" href="${klookUrl(h)}" target="_blank" rel="noopener sponsored">查看 Klook 優惠</a>
        <a class="btn btn--ghost" href="${officialUrl(h)}" target="_blank" rel="noopener">直連飯店官網</a>
      </div>
    </div>
  </article>`;
}

function render() {
  const list = getFiltered();
  $("#hotelGrid").innerHTML = list.map(cardHTML).join("");
  $("#emptyState").hidden = list.length > 0;
  $("#resultCount").innerHTML = `共 <b>${list.length}</b> 間符合條件`;
  bindSlides();
}

// 圖片滑動指示點
function bindSlides() {
  $$(".card__media").forEach((media) => {
    const track = $(".slides", media);
    const dots = $$(".dots button", media);
    track.addEventListener("scroll", () => {
      const idx = Math.round(track.scrollLeft / track.clientWidth);
      dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
    }, { passive: true });
    dots.forEach((d, i) =>
      d.addEventListener("click", () => track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" }))
    );
  });
}

// ---------- 篩選 UI ----------
function syncChips() {
  $$('[data-group="vibe"] .chip').forEach((c) => c.classList.toggle("is-active", c.dataset.value === state.vibe));
  $$('[data-group="price"] .chip').forEach((c) => c.classList.toggle("is-active", c.dataset.value === state.price));
  $$('[data-group="feature"] .chip').forEach((c) => c.classList.toggle("is-active", state.features.has(c.dataset.value)));
  $$(".vibe__btn").forEach((b) => b.classList.toggle("is-active", b.dataset.vibe === state.vibe));
  $("#sort").value = state.sort;
}

function setVibe(vibe, scroll = false) {
  state.vibe = vibe;
  syncChips();
  render();
  if (scroll) $("#hotels").scrollIntoView({ behavior: "smooth" });
}

function resetFilters() {
  state.vibe = "all";
  state.price = "all";
  state.features.clear();
  state.sort = "rank";
  syncChips();
  render();
}

$("#filters").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  const group = chip.parentElement.dataset.group;
  const v = chip.dataset.value;
  if (group === "vibe") state.vibe = v;
  if (group === "price") state.price = v;
  if (group === "feature") state.features.has(v) ? state.features.delete(v) : state.features.add(v);
  syncChips();
  render();
});
$("#sort").addEventListener("change", (e) => { state.sort = e.target.value; render(); });
$("#resetFilters").addEventListener("click", resetFilters);
$("#emptyReset").addEventListener("click", resetFilters);

// Hero 情境式選單 & 交通卡快捷
$$(".vibe__btn").forEach((b) => b.addEventListener("click", () => setVibe(b.dataset.vibe, true)));
$$("[data-quick]").forEach((b) => b.addEventListener("click", () => setVibe(b.dataset.quick, true)));

// ---------- 比較匣 ----------
function toggleCompare(id, on) {
  if (on) {
    if (state.compare.length >= MAX_COMPARE) {
      toast(`最多比較 ${MAX_COMPARE} 間飯店喔！`);
      return false;
    }
    state.compare.push(id);
  } else {
    state.compare = state.compare.filter((x) => x !== id);
  }
  updateDrawer();
  return true;
}

function updateDrawer() {
  const n = state.compare.length;
  const drawer = $("#compareDrawer");
  drawer.classList.toggle("is-open", n > 0);
  drawer.setAttribute("aria-hidden", n === 0);
  $("#compareCount").textContent = n;
  $("#openMatrix").disabled = n < 2;
  $("#openMatrix").textContent = n < 2 ? "再選 1 間即可對比" : "立即進行橫向矩陣對比";

  const thumbs = [];
  for (let i = 0; i < MAX_COMPARE; i++) {
    const h = HOTELS.find((x) => x.id === state.compare[i]);
    thumbs.push(
      h
        ? `<div class="thumb" title="${h.name}"><img src="${imgUrl(h.id, 1, 120, 120)}" alt=""><button data-remove="${h.id}" aria-label="移除 ${h.name}">✕</button></div>`
        : `<div class="thumb thumb--empty"></div>`
    );
  }
  $("#compareThumbs").innerHTML = thumbs.join("");

  // 同步卡片狀態
  $$(".card").forEach((c) => {
    const on = state.compare.includes(+c.dataset.id);
    c.classList.toggle("is-compared", on);
    const cb = $("input[data-compare]", c);
    if (cb) cb.checked = on;
  });
}

$("#hotelGrid").addEventListener("change", (e) => {
  const cb = e.target.closest("input[data-compare]");
  if (!cb) return;
  if (!toggleCompare(+cb.dataset.compare, cb.checked)) cb.checked = false;
});
$("#compareThumbs").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-remove]");
  if (btn) toggleCompare(+btn.dataset.remove, false);
});
$("#clearCompare").addEventListener("click", () => { state.compare = []; updateDrawer(); });

// ---------- 矩陣對比彈窗 ----------
const MATRIX_ROWS = [
  { key: "roomPool", label: "客房湯池材質" },
  { key: "publicBath", label: "大眾裸湯" },
  { key: "kids", label: "親子設施" },
  { key: "dining", label: "餐飲服務" },
  { key: "transport", label: "交通接駁" },
];

function renderMatrix() {
  const hotels = state.compare.map((id) => HOTELS.find((h) => h.id === id));
  const minPrice = Math.min(...hotels.map(salePrice));
  const head = `<thead><tr><th>比較項目</th>${hotels
    .map((h) => `<th><img src="${imgUrl(h.id, 1, 400, 240)}" alt=""><span class="m-name">${h.name}</span><span class="m-tag">${h.tag}</span></th>`)
    .join("")}</tr></thead>`;

  const rows = MATRIX_ROWS.map((r) =>
    `<tr><th scope="row">${r.label}</th>${hotels
      .map((h) => {
        const v = h.matrix[r.key];
        return `<td class="${v.startsWith("—") ? "no" : ""}">${v}</td>`;
      })
      .join("")}</tr>`
  ).join("");

  const priceRow = `<tr><th scope="row">參考價格帶</th>${hotels
    .map((h) => {
      const sp = salePrice(h);
      const best = sp === minPrice ? " m-best" : "";
      return `<td class="${best}"><span class="m-price">${fmt(sp)}</span> 起 / ${h.unit}${best ? "<br><small class='yes'>✔ 最划算</small>" : ""}</td>`;
    })
    .join("")}</tr>`;

  const foot = `<tfoot><tr><th scope="row">立即預訂</th>${hotels
    .map((h) => `<td><a class="btn btn--accent" href="${klookUrl(h)}" target="_blank" rel="noopener sponsored">【查看 Klook 優惠】</a><a class="btn btn--ghost" href="${officialUrl(h)}" target="_blank" rel="noopener">【直達飯店官網】</a></td>`)
    .join("")}</tr></tfoot>`;

  $("#matrixTable").innerHTML = head + `<tbody>${rows}${priceRow}</tbody>` + foot;
}

let lastFocus = null;
function openMatrix() {
  if (state.compare.length < 2) return;
  renderMatrix();
  lastFocus = document.activeElement;
  $("#matrixModal").hidden = false;
  document.body.classList.add("no-scroll");
  $("#closeMatrix").focus();
}
function closeMatrix() {
  $("#matrixModal").hidden = true;
  document.body.classList.remove("no-scroll");
  lastFocus?.focus();
}
$("#openMatrix").addEventListener("click", openMatrix);
$("#closeMatrix").addEventListener("click", closeMatrix);
$("#matrixModal").addEventListener("click", (e) => { if (e.target.id === "matrixModal") closeMatrix(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("#matrixModal").hidden) closeMatrix(); });

// ---------- Toast ----------
let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("is-show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-show"), 2200);
}

// ---------- 導覽列 & 倒數 ----------
const nav = $("#nav");
const onScroll = () => nav.classList.toggle("is-solid", window.scrollY > window.innerHeight * 0.6);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

function tickCountdown() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(24, 0, 0, 0);
  const s = Math.floor((end - now) / 1000);
  const p = (n) => String(n).padStart(2, "0");
  $("#countdown").textContent = `剩 ${p(Math.floor(s / 3600))}:${p(Math.floor((s % 3600) / 60))}:${p(s % 60)}`;
}
tickCountdown();
setInterval(tickCountdown, 1000);

// ---------- 初始化 ----------
render();
updateDrawer();
