const STORAGE_KEY = "karavay-dashboard-v2";
const LOCAL_UPDATED_AT_KEY = "karavay-dashboard-local-updated-at";
const REMOTE_UPDATED_AT_KEY = "karavay-dashboard-remote-updated-at";
const SETTINGS_PASSWORD = "777";
const SITE_PASSWORD = "999";
const REMOTE_STATE_URL = "/api/state";
const REMOTE_POLL_INTERVAL_MS = 30000;
const ROOM_STOCK = {
  1: 142,
  2: 20,
  3: 34,
};

const initialSales = [
  { area: 75.55, totalPrice: 8461600, cleanTotal: 8461600, grossM2: 112000, netM2: 112000, dduDate: "2025-04-19", rooms: "2К", paymentMethod: "Рассрочка", dealStatus: "Зарегистрирован" },
  { area: 62.95, totalPrice: 7428100, cleanTotal: 7024516, grossM2: 118000, netM2: 111589, dduDate: "2025-04-22", rooms: "2К", paymentMethod: "Ипотека ВТБ", dealStatus: "Зарегистрирован" },
  { area: 44.25, totalPrice: 5088750, cleanTotal: 5088750, grossM2: 115000, netM2: 115000, dduDate: "2025-05-21", rooms: "1К", paymentMethod: "Рассрочка", dealStatus: "Зарегистрирован" },
  { area: 49.3, totalPrice: 5620200, cleanTotal: 5620200, grossM2: 114000, netM2: 114000, dduDate: "2025-06-18", rooms: "1К", paymentMethod: "Ипотека СБЕР", dealStatus: "Зарегистрирован" },
  { area: 44.15, totalPrice: 4500000, cleanTotal: 4500000, grossM2: 101925, netM2: 101925, dduDate: "2025-09-25", rooms: "1К", paymentMethod: "Рассрочка", dealStatus: "Зарегистрирован" },
  { area: 44.6, totalPrice: 6375000, cleanTotal: 5393625, grossM2: 142937, netM2: 120933, dduDate: "2025-10-02", rooms: "1К", paymentMethod: "Ипотека СБЕР", dealStatus: "Зарегистрирован" },
  { area: 75.15, totalPrice: 8300000, cleanTotal: 8300000, grossM2: 110446, netM2: 110446, dduDate: "2025-10-09", rooms: "3К", paymentMethod: "Рассрочка", dealStatus: "Зарегистрирован" },
  { area: 50.15, totalPrice: 7099234, cleanTotal: 5838403, grossM2: 141560, netM2: 116419, dduDate: "2025-10-23", rooms: "1К", paymentMethod: "Ипотека", dealStatus: "Зарегистрирован" },
  { area: 75.5, totalPrice: 8837275, cleanTotal: 8837275, grossM2: 117050, netM2: 117050, dduDate: "2025-10-23", rooms: "3К", paymentMethod: "Рассрочка", dealStatus: "Зарегистрирован" },
  { area: 46.45, totalPrice: 5620450, cleanTotal: 5395632, grossM2: 121000, netM2: 116160, dduDate: "2025-11-06", rooms: "1К", paymentMethod: "Ипотека СБЕР", dealStatus: "Зарегистрирован" },
  { area: 44.25, totalPrice: 6259605, cleanTotal: 5501605, grossM2: 141460, netM2: 124330, dduDate: "2025-11-10", rooms: "1К", paymentMethod: "Ипотека СБЕР", dealStatus: "Зарегистрирован" },
  { area: 59.5, totalPrice: 7158921, cleanTotal: 6758526.53, grossM2: 120318, netM2: 113589, dduDate: "2025-12-04", rooms: "2К", paymentMethod: "Ипотека СБЕР", dealStatus: "Зарегистрирован" },
  { area: 46.6, totalPrice: 5178658, cleanTotal: 5178658, grossM2: 111130, netM2: 111130, dduDate: "2025-12-09", rooms: "1К", paymentMethod: "Ипотека СБЕР", dealStatus: "Зарегистрирован" },
  { area: 54.15, totalPrice: 5000000.36, cleanTotal: 5000000.36, grossM2: 92336, netM2: 92336, dduDate: "2025-12-11", rooms: "1К", paymentMethod: "100% оплата", dealStatus: "Зарегистрирован" },
  { area: 62.2, totalPrice: 5999812, cleanTotal: 5491668, grossM2: 96460, netM2: 88290, dduDate: "2025-12-11", rooms: "1К", paymentMethod: "Ипотека Сбер", dealStatus: "Зарегистрирован" },
  { area: 46.25, totalPrice: 5303580, cleanTotal: 5303580, grossM2: 114672, netM2: 114672, dduDate: "2025-12-12", rooms: "1К", paymentMethod: "Ипотека Сбер", dealStatus: "Зарегистрирован" },
  { area: 46.6, totalPrice: 6819211, cleanTotal: 5649211, grossM2: 146335, netM2: 121228, dduDate: "2025-12-12", rooms: "1К", paymentMethod: "Ипотека Сбер", dealStatus: "Зарегистрирован" },
  { area: 43.75, totalPrice: 5250000, cleanTotal: 4411700, grossM2: 120000, netM2: 100839, dduDate: "2025-12-12", rooms: "1К", paymentMethod: "Ипотека СБЕР", dealStatus: "Зарегистрирован" },
  { area: 44.6, totalPrice: 6004944, cleanTotal: 5640300.26, grossM2: 134640, netM2: 126464, dduDate: "2025-12-13", rooms: "1К", paymentMethod: "Ипотека СБЕР", dealStatus: "Зарегистрирован" },
  { area: 46.6, totalPrice: 6264904, cleanTotal: 5305658, grossM2: 134440, netM2: 113855, dduDate: "2025-12-16", rooms: "1К", paymentMethod: "Ипотека Сбер", dealStatus: "Зарегистрирован" },
  { area: 75.55, totalPrice: 8914900, cleanTotal: 8914900, grossM2: 118000, netM2: 118000, dduDate: "2025-12-17", rooms: "2К", paymentMethod: "Рассрочка", dealStatus: "Зарегистрирован" },
  { area: 59.5, totalPrice: 6999937, cleanTotal: 6999937, grossM2: 117646, netM2: 117646, dduDate: "2025-12-24", rooms: "2К", paymentMethod: "Рассрочка", dealStatus: "Зарегистрирован" },
  { area: 49.1, totalPrice: 5704634.4, cleanTotal: 5724634.4, grossM2: 116184, netM2: 116591, dduDate: "2025-12-30", rooms: "1К", paymentMethod: "Рассрочка", dealStatus: "Зарегистрирован" },
  { area: 75.15, totalPrice: 8950365, cleanTotal: 8592350.4, grossM2: 119100, netM2: 114336, dduDate: "2026-01-13", rooms: "3К", paymentMethod: "Ипотека СБЕР", dealStatus: "Зарегистрирован" },
  { area: 46.6, totalPrice: 5109690, cleanTotal: 4905302.4, grossM2: 109650, netM2: 105264, dduDate: "2026-01-16", rooms: "1К", paymentMethod: "Ипотека СБЕР", dealStatus: "Зарегистрирован" },
  { area: 101.1, totalPrice: 11399025, cleanTotal: 11399025, grossM2: 112750, netM2: 112750, dduDate: "2026-01-19", rooms: "3К", paymentMethod: "Ипотека СБЕР", dealStatus: "Зарегистрирован" },
  { area: 59.2, totalPrice: 6719792, cleanTotal: 6451000.32, grossM2: 113510, netM2: 108970, dduDate: "2026-01-22", rooms: "2к", paymentMethod: "Ипотека СБЕР", dealStatus: "Зарегистрирован" },
  { area: 46.95, totalPrice: 5246193, cleanTotal: 5246193, grossM2: 111740, netM2: 111740, dduDate: "2026-01-29", rooms: "1к", paymentMethod: "Ипотека СБЕР", dealStatus: "Зарегистрирован" },
  { area: 46.95, totalPrice: 5333520, cleanTotal: 5333520, grossM2: 113600, netM2: 113600, dduDate: "2026-01-29", rooms: "1К", paymentMethod: "Ипотека СБЕР", dealStatus: "Зарегистрирован" },
  { area: 59.2, totalPrice: 7059600, cleanTotal: 6847812, grossM2: 119250, netM2: 115672, dduDate: "2026-01-30", rooms: "2к", paymentMethod: "Ипотека СБЕР", dealStatus: "Зарегистрирован" },
  { area: 54.15, totalPrice: 6016065, cleanTotal: 6016065, grossM2: 111100, netM2: 111100, dduDate: "2026-02-05", rooms: "1К", paymentMethod: "Рассрочка", dealStatus: "Зарегистрирован" },
  { area: 49.85, totalPrice: 5849399, cleanTotal: 5615423.04, grossM2: 117340, netM2: 112646, dduDate: "2026-02-27", rooms: "1К", paymentMethod: "Рассрочка", dealStatus: "Зарегистрирован" },
  { area: 44.15, totalPrice: 5077250, cleanTotal: 5077250, grossM2: 115000, netM2: 115000, dduDate: "2026-03-02", rooms: "1К", paymentMethod: "100% оплата", dealStatus: "Зарегистрирован" },
  { area: 49.85, totalPrice: 5779609, cleanTotal: 5779609, grossM2: 115940, netM2: 115940, dduDate: "2026-03-31", rooms: "1К", paymentMethod: "Рассрочка", dealStatus: "Зарегистрирован" },
];

const defaults = {
  settings: {
    totalApartments: 196,
    totalArea: 11858.6,
    initialSoldApartments: 34,
    initialSoldArea: 1850,
    initialSoldRevenue: 0,
    commissionDate: "2027-03-31",
    postCommissionSaleEndDate: "2028-03-31",
    interestStartDate: "2026-03-20",
    remainingSellableArea: 9650,
    targetApartmentsCommission: 55,
    preCommissionPriceM2: 125000,
    totalApartmentsByCommission: 84,
    loanPrincipal: 681275715.24,
    accruedInterest: 236606343.87,
    escrowBalance: 211000000,
    loanRate: 21,
    completionStartDate: "2026-03-31",
    completionFinancing: 150000000,
    completionRate: 21,
    postCommissionLoanRate: 20,
    postCommissionCompletionRate: 20,
  },
  sales: initialSales,
  apartments: [],
};

let state = loadState();
state.settings = { ...defaults.settings, ...state.settings };
if (!state.sales.length) state.sales = structuredClone(initialSales);
if (numberValue(state.settings.completionRate) === 20) {
  state.settings.completionRate = 21;
  saveState();
}
if (numberValue(state.settings.targetApartmentsCommission) === 50) {
  state.settings.targetApartmentsCommission = defaults.settings.targetApartmentsCommission;
  saveState();
}
if (numberValue(state.settings.preCommissionPriceM2) === 130000) {
  state.settings.preCommissionPriceM2 = defaults.settings.preCommissionPriceM2;
  saveState();
}
if (numberValue(state.settings.totalArea) === 11500) {
  state.settings.totalArea = defaults.settings.totalArea;
  saveState();
}
if (numberValue(state.settings.initialSoldApartments) !== defaults.settings.initialSoldApartments) {
  state.settings.initialSoldApartments = defaults.settings.initialSoldApartments;
  saveState();
}
const formatNumber = new Intl.NumberFormat("ru-RU");
const formatMoney = new Intl.NumberFormat("ru-RU", {
  maximumFractionDigits: 0,
  style: "currency",
  currency: "RUB",
});
const formatDateTime = new Intl.DateTimeFormat("ru-RU", {
  dateStyle: "long",
  timeStyle: "short",
});
let remoteSyncEnabled = false;
let isHydratingRemoteState = false;
let remoteSaveTimer = null;
let lastRemoteUpdatedAt = localStorage.getItem(REMOTE_UPDATED_AT_KEY) || "";
let lastLocalUpdatedAt = numberValue(localStorage.getItem(LOCAL_UPDATED_AT_KEY));
let hasPendingRemoteChanges = lastLocalUpdatedAt > parseTimestamp(lastRemoteUpdatedAt);

function unlockSite() {
  document.body.classList.remove("locked");
  sessionStorage.setItem("karavay-site-unlocked", "true");
}

function lockSite() {
  document.body.classList.add("locked");
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return normalizeState(saved);
  } catch (error) {
    console.warn("Не удалось прочитать сохраненные данные", error);
  }
  return structuredClone(defaults);
}

function normalizeState(candidate) {
  if (!candidate || !candidate.settings || !Array.isArray(candidate.sales) || !Array.isArray(candidate.apartments)) {
    return structuredClone(defaults);
  }
  return {
    settings: { ...defaults.settings, ...candidate.settings },
    sales: sortSalesByDate(candidate.sales.map((sale) => ({ ...sale }))),
    apartments: candidate.apartments.map((apartment) => ({ ...apartment })),
  };
}

function applyState(nextState, { persistLocal = true } = {}) {
  state = normalizeState(nextState);
  if (persistLocal) localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setStatusText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function scheduleRemoteSave() {
  if (!remoteSyncEnabled || isHydratingRemoteState) return;
  clearTimeout(remoteSaveTimer);
  remoteSaveTimer = window.setTimeout(() => {
    persistRemoteState().catch((error) => {
      console.error("Не удалось сохранить данные на сервере", error);
      setStatusText("#syncStatus", "Не удалось сохранить данные на сервере. Проверьте подключение к базе.");
    });
  }, 500);
}

async function fetchRemoteSnapshot() {
  const response = await fetch(REMOTE_STATE_URL, { cache: "no-store" });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Не удалось получить данные с сервера.");
  }
  return response.json();
}

async function persistRemoteState() {
  if (!remoteSyncEnabled) return;
  const response = await fetch(REMOTE_STATE_URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(state),
  });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Не удалось сохранить данные на сервере.");
  }
  const payload = await response.json();
  lastRemoteUpdatedAt = payload.updatedAt || lastRemoteUpdatedAt;
  localStorage.setItem(REMOTE_UPDATED_AT_KEY, lastRemoteUpdatedAt);
  hasPendingRemoteChanges = false;
  setStatusText("#syncStatus", "Данные сохранены в общей базе. Все браузеры увидят обновление.");
}

async function refreshRemoteState({ silent = false } = {}) {
  try {
    const payload = await fetchRemoteSnapshot();
    if (!payload.state) {
      remoteSyncEnabled = true;
      await persistRemoteState();
      return;
    }
    remoteSyncEnabled = true;
    const remoteUpdatedAt = payload.updatedAt || "";
    const remoteUpdatedMs = parseTimestamp(remoteUpdatedAt);
    const localIsNewer = lastLocalUpdatedAt > remoteUpdatedMs;
    if (hasPendingRemoteChanges || localIsNewer) {
      if (hasPendingRemoteChanges) {
        persistRemoteState().catch((error) => {
          console.error("Не удалось догрузить свежие изменения в общую базу", error);
        });
      }
      if (!silent) {
        setStatusText(
          "#syncStatus",
          "На этом устройстве есть более свежие изменения. Не даю старой базе перезаписать новые продажи.",
        );
      }
      return;
    }
    if (!lastRemoteUpdatedAt || payload.updatedAt !== lastRemoteUpdatedAt) {
      isHydratingRemoteState = true;
      applyState(payload.state);
      lastRemoteUpdatedAt = remoteUpdatedAt;
      localStorage.setItem(REMOTE_UPDATED_AT_KEY, lastRemoteUpdatedAt);
      renderAll();
    }
    if (!silent) setStatusText("#syncStatus", "Общая база подключена. Данные синхронизируются между браузерами.");
  } catch (error) {
    if (!silent) {
      console.warn("Серверная база пока недоступна, работаю локально", error);
      setStatusText("#syncStatus", "Пока работаем локально. После подключения базы данные будут общими для всех браузеров.");
    }
  } finally {
    isHydratingRemoteState = false;
  }
}

function saveState({ remote = true } = {}) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (remote) {
    lastLocalUpdatedAt = Date.now();
    hasPendingRemoteChanges = true;
    localStorage.setItem(LOCAL_UPDATED_AT_KEY, String(lastLocalUpdatedAt));
    scheduleRemoteSave();
  }
}

function parseTimestamp(value) {
  const parsed = Date.parse(String(value || ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

function numberValue(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function rub(value) {
  return formatMoney.format(numberValue(value));
}

function qty(value, suffix = "") {
  return `${formatNumber.format(Math.round(numberValue(value) * 100) / 100)}${suffix}`;
}

function parseLocalDate(dateString) {
  const [year, month, day] = String(dateString || "")
    .split("-")
    .map((part) => Number(part));
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function dateInputFromDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatDateRu(dateString) {
  const date = parseLocalDate(dateString);
  if (!date) return "";
  return `${String(date.getDate()).padStart(2, "0")}.${String(date.getMonth() + 1).padStart(2, "0")}.${date.getFullYear()}`;
}

function monthsUntil(dateString, fromDate = new Date()) {
  const target = parseLocalDate(dateString);
  const today = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
  if (!target || Number.isNaN(target.getTime())) return 0;
  const years = target.getFullYear() - today.getFullYear();
  const months = years * 12 + target.getMonth() - today.getMonth();
  const dayAdjustment = target.getDate() >= today.getDate() ? 1 : 0;
  return Math.max(0, months + dayAdjustment);
}

function daysBetween(startString, endString) {
  const start = parseLocalDate(startString);
  const end = parseLocalDate(endString);
  if (!start || !end || Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end < start) return 0;
  return Math.ceil((end - start) / 86400000);
}

function monthsBetween(startString, endString) {
  const start = parseLocalDate(startString);
  const end = parseLocalDate(endString);
  if (!start || !end || Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end < start) return 0;
  const years = end.getFullYear() - start.getFullYear();
  const months = years * 12 + end.getMonth() - start.getMonth();
  const dayAdjustment = end.getDate() >= start.getDate() ? 0 : -1;
  return Math.max(0, months + dayAdjustment);
}

function getSoldApartmentNumbers() {
  return new Set(state.sales.map((sale) => String(sale.apartment).trim()).filter(Boolean));
}

function getAvailableApartments() {
  const soldNumbers = getSoldApartmentNumbers();
  return state.apartments.filter((apartment) => {
    const number = String(apartment.number).trim();
    return apartment.status !== "sold" && !soldNumbers.has(number);
  });
}

function roomKey(value) {
  const match = String(value || "").match(/[123]/);
  return match ? match[0] : "";
}

function roomStockRows() {
  const soldByRoom = state.sales.reduce(
    (totals, sale) => {
      const key = roomKey(sale.rooms);
      if (key && totals[key] !== undefined) totals[key] += 1;
      return totals;
    },
    { 1: 0, 2: 0, 3: 0 },
  );

  return Object.entries(ROOM_STOCK).map(([key, total]) => ({
    key,
    title: `${key}-комнатные`,
    total,
    sold: soldByRoom[key],
    left: Math.max(0, total - soldByRoom[key]),
  }));
}

function calculate() {
  const settings = state.settings;
  const now = new Date();
  const todayString = dateInputFromDate(now);
  const newSoldCount = state.sales.length;
  const newSoldArea = state.sales.reduce((sum, sale) => sum + numberValue(sale.area), 0);
  const newSoldRevenue = state.sales.reduce((sum, sale) => sum + numberValue(sale.totalPrice), 0);
  const soldCount = newSoldCount;
  const soldArea = newSoldArea;
  const soldRevenue = newSoldRevenue;
  const soldNetRevenue = state.sales.reduce((sum, sale) => {
    const area = numberValue(sale.area);
    const net = numberValue(sale.netM2);
    return sum + (numberValue(sale.cleanTotal) || area * net);
  }, 0);

  const availableApartments = getAvailableApartments();
  const hasInventory = state.apartments.length > 0;
  const remainingCount = hasInventory
    ? availableApartments.length
    : Math.max(0, numberValue(settings.totalApartments) - soldCount);
  const remainingArea = hasInventory
    ? availableApartments.reduce((sum, apartment) => sum + numberValue(apartment.area), 0)
    : Math.max(0, numberValue(settings.totalArea) - soldArea);
  const averageRemainingArea = remainingCount > 0 ? remainingArea / remainingCount : 0;
  const soldTowardCommissionPlan = Math.max(
    0,
    soldCount - numberValue(settings.initialSoldApartments),
  );
  const apartmentsToSellBeforeCommission = Math.max(
    0,
    numberValue(settings.targetApartmentsCommission) - soldTowardCommissionPlan,
  );
  const plannedPreCommissionRevenue =
    apartmentsToSellBeforeCommission *
    averageRemainingArea *
    numberValue(settings.preCommissionPriceM2);
  const monthsLeft = monthsUntil(settings.commissionDate, now);
  const postCommissionMonths = monthsBetween(settings.commissionDate, settings.postCommissionSaleEndDate);
  const daysFromBaseToToday = daysBetween(settings.interestStartDate, todayString);
  const daysLeft = daysBetween(todayString, settings.commissionDate);
  const completionDaysToToday = daysBetween(settings.completionStartDate, todayString);
  const postCommissionDays = daysBetween(settings.commissionDate, settings.postCommissionSaleEndDate);
  const accruedInterestToToday =
    numberValue(settings.accruedInterest) +
    (numberValue(settings.loanPrincipal) * numberValue(settings.loanRate) * daysFromBaseToToday) / 100 / 365;
  const futureInterestToCommission =
    (numberValue(settings.loanPrincipal) * numberValue(settings.loanRate) * daysLeft) / 100 / 365;
  const completionInterestToToday =
    (numberValue(settings.completionFinancing) * numberValue(settings.completionRate) * completionDaysToToday) /
    100 /
    365;
  const completionInterestToCommission =
    (numberValue(settings.completionFinancing) * numberValue(settings.completionRate) * daysLeft) /
    100 /
    365;
  const interestAtCommission =
    accruedInterestToToday + futureInterestToCommission + completionInterestToToday + completionInterestToCommission;
  const creditMassAtCommission =
    numberValue(settings.loanPrincipal) +
    numberValue(settings.completionFinancing) +
    interestAtCommission;
  const dduReleaseAmount = newSoldRevenue + plannedPreCommissionRevenue;
  const remainingDduAfterInterest = Math.max(0, dduReleaseAmount - interestAtCommission);
  const remainingMainDebtAfterDdu = Math.max(0, numberValue(settings.loanPrincipal) - remainingDduAfterInterest);
  const dduAfterMainDebt = Math.max(0, remainingDduAfterInterest - numberValue(settings.loanPrincipal));
  const remainingCompletionDebtAfterDdu = Math.max(0, numberValue(settings.completionFinancing) - dduAfterMainDebt);
  const creditMassAfterDdu = remainingMainDebtAfterDdu + remainingCompletionDebtAfterDdu;
  const mainInterestAfterCommission =
    (remainingMainDebtAfterDdu * numberValue(settings.postCommissionLoanRate) * postCommissionDays) / 100 / 365;
  const completionInterestAfterCommission =
    (remainingCompletionDebtAfterDdu * numberValue(settings.postCommissionCompletionRate) * postCommissionDays) / 100 / 365;
  const requiredRevenue =
    creditMassAtCommission + mainInterestAfterCommission + completionInterestAfterCommission;
  const requiredRevenueLeft = Math.max(0, requiredRevenue - dduReleaseAmount);

  return {
    soldCount,
    soldArea,
    soldRevenue,
    soldNetRevenue,
    newSoldCount,
    newSoldArea,
    newSoldRevenue,
    soldTowardCommissionPlan,
    apartmentsToSellBeforeCommission,
    averageGrossM2: soldArea > 0 ? soldRevenue / soldArea : 0,
    averageNetM2: soldArea > 0 ? soldNetRevenue / soldArea : 0,
    remainingCount,
    remainingArea,
    averageRemainingArea,
    plannedPreCommissionRevenue,
    monthsLeft,
    postCommissionMonths,
    daysLeft,
    postCommissionDays,
    futureInterestToCommission,
    completionInterestToToday,
    completionInterestToCommission,
    interestAtCommission,
    creditMassAtCommission,
    dduReleaseAmount,
    creditMassAfterDdu,
    remainingMainDebtAfterDdu,
    remainingCompletionDebtAfterDdu,
    accruedInterestToToday,
    daysFromBaseToToday,
    completionDaysToToday,
    mainInterestAfterCommission,
    completionInterestAfterCommission,
    requiredRevenue,
    requiredRevenueLeft,
  };
}

function scenarioMetrics(totals, plannedPreCommissionRevenue, afterCommissionArea, profitRate = 0) {
  const revenue = totals.requiredRevenue * (1 + profitRate);
  const dduSignedRevenue = totals.newSoldRevenue;
  const deductionsBeforeCommission = totals.dduReleaseAmount;
  const revenueLeft = Math.max(0, revenue - deductionsBeforeCommission);
  const afterCommissionRevenue = revenueLeft;
  const priceM2 = afterCommissionArea > 0 ? afterCommissionRevenue / afterCommissionArea : 0;
  const averageCheck = priceM2 * totals.averageRemainingArea;
  return { revenue, revenueLeft, dduSignedRevenue, deductionsBeforeCommission, afterCommissionRevenue, priceM2, averageCheck };
}

function aggregateSalesMetrics(sales) {
  const soldCount = sales.length;
  const soldArea = sales.reduce((sum, sale) => sum + numberValue(sale.area), 0);
  const soldRevenue = sales.reduce((sum, sale) => sum + numberValue(sale.totalPrice), 0);
  const soldNetRevenue = sales.reduce((sum, sale) => {
    const area = numberValue(sale.area);
    const net = numberValue(sale.netM2);
    return sum + (numberValue(sale.cleanTotal) || area * net);
  }, 0);
  return {
    soldCount,
    soldArea,
    soldRevenue,
    soldNetRevenue,
    averageGrossM2: soldArea > 0 ? soldRevenue / soldArea : 0,
    averageNetM2: soldArea > 0 ? soldNetRevenue / soldArea : 0,
    averageArea: soldCount > 0 ? soldArea / soldCount : 0,
    averageCheck: soldCount > 0 ? soldRevenue / soldCount : 0,
  };
}

function previousMonthRange(now = new Date()) {
  const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const previousMonthStart = new Date(currentMonthStart.getFullYear(), currentMonthStart.getMonth() - 1, 1);
  const previousMonthEnd = new Date(currentMonthStart.getFullYear(), currentMonthStart.getMonth(), 0);
  return { previousMonthStart, previousMonthEnd };
}

function isSameMonth(date, targetMonthStart) {
  return (
    date &&
    date.getFullYear() === targetMonthStart.getFullYear() &&
    date.getMonth() === targetMonthStart.getMonth()
  );
}

function signedRub(value) {
  const amount = numberValue(value);
  const sign = amount > 0 ? "+" : amount < 0 ? "-" : "";
  return `${sign}${rub(Math.abs(amount))}`;
}

function signedQty(value, suffix = "") {
  const amount = numberValue(value);
  const sign = amount > 0 ? "+" : amount < 0 ? "-" : "";
  return `${sign}${qty(Math.abs(amount), suffix)}`;
}

function renderAnalytics(totals) {
  const now = new Date();
  const { previousMonthStart } = previousMonthRange(now);
  const monthLabel = new Intl.DateTimeFormat("ru-RU", { month: "long", year: "numeric" }).format(previousMonthStart);
  const monthSales = state.sales.filter((sale) => isSameMonth(parseLocalDate(sale.dduDate), previousMonthStart));
  const otherSales = state.sales.filter((sale) => !isSameMonth(parseLocalDate(sale.dduDate), previousMonthStart));
  const monthMetrics = aggregateSalesMetrics(monthSales);
  const otherMetrics = aggregateSalesMetrics(otherSales);
  const overallMetrics = aggregateSalesMetrics(state.sales);
  const grossImpact = overallMetrics.averageGrossM2 - otherMetrics.averageGrossM2;
  const netImpact = overallMetrics.averageNetM2 - otherMetrics.averageNetM2;
  const revenueShare = overallMetrics.soldRevenue > 0 ? (monthMetrics.soldRevenue / overallMetrics.soldRevenue) * 100 : 0;
  const totalProjectArea = numberValue(state.settings.totalArea);
  const projectAreaShare = totalProjectArea > 0 ? (monthMetrics.soldArea / totalProjectArea) * 100 : 0;
  const roomMix = monthSales.reduce(
    (accumulator, sale) => {
      const key = roomKey(sale.rooms);
      if (key && accumulator[key] !== undefined) accumulator[key] += 1;
      return accumulator;
    },
    { 1: 0, 2: 0, 3: 0 },
  );
  const roomMixText = Object.entries(roomMix)
    .filter(([, count]) => count > 0)
    .map(([rooms, count]) => `${rooms}к: ${count} шт.`)
    .join(", ");
  const otherMonthKeys = new Set(otherSales.map((sale) => String(sale.dduDate || "").slice(0, 7)).filter(Boolean));
  const averageApartmentsOtherMonths = otherMonthKeys.size > 0 ? otherMetrics.soldCount / otherMonthKeys.size : 0;

  document.querySelector("#analyticsPeriod").textContent = `Результаты продаж за ${monthLabel}`;

  if (!monthSales.length) {
    document.querySelector("#analyticsKpiGrid").innerHTML = `
      <article class="kpi-card">
        <span class="kpi-label">Аналитика</span>
        <span class="kpi-value">Нет данных</span>
        <span class="kpi-foot">За ${monthLabel} в разделе продаж пока нет сделок с датой ДДУ.</span>
      </article>
    `;
    document.querySelector("#analyticsImpact").innerHTML = "";
    document.querySelector("#analyticsExtra").innerHTML = "";
    document.querySelector("#analyticsMonthShare").textContent = "";
    return;
  }

  const analyticsKpis = [
    ["Продано квартир", qty(monthMetrics.soldCount, " шт."), `за ${monthLabel}`],
    ["Продано метров", qty(monthMetrics.soldArea, " м2"), `доля от общей площади проекта ${qty(projectAreaShare, "%")}`],
    ["Средний грязный м2", rub(monthMetrics.averageGrossM2), `за ${monthLabel}`],
    ["Средний чистый м2", rub(monthMetrics.averageNetM2), `за ${monthLabel}`],
    ["Выручка месяца", rub(monthMetrics.soldRevenue), `доля в общей выручке ${qty(revenueShare, "%")}`],
    ["Средняя площадь квартиры", qty(monthMetrics.averageArea, " м2"), `за ${monthLabel}`],
    ["Влияние на грязный м2", signedRub(grossImpact), "изменение общей средней цены"],
    ["Влияние на чистый м2", signedRub(netImpact), "изменение общей чистой цены"],
  ];

  document.querySelector("#analyticsKpiGrid").innerHTML = analyticsKpis
    .map(
      ([label, value, foot]) => `
        <article class="kpi-card">
          <span class="kpi-label">${label}</span>
          <span class="kpi-value">${value}</span>
          <span class="kpi-foot">${foot}</span>
        </article>
      `,
    )
    .join("");

  document.querySelector("#analyticsMonthShare").textContent = `${qty(projectAreaShare, "%")} общей площади проекта`;

  renderMetricList("#analyticsImpact", [
    ["Средний грязный м2 без этого месяца", rub(otherMetrics.averageGrossM2)],
    ["Средний грязный м2 со всеми продажами", rub(overallMetrics.averageGrossM2)],
    ["Изменение общего грязного м2", signedRub(grossImpact)],
    ["Средний чистый м2 без этого месяца", rub(otherMetrics.averageNetM2)],
    ["Средний чистый м2 со всеми продажами", rub(overallMetrics.averageNetM2)],
    ["Изменение общего чистого м2", signedRub(netImpact)],
  ]);

  renderMetricList("#analyticsExtra", [
    ["Выручка на одну квартиру", rub(monthMetrics.averageCheck)],
    ["Чистая выручка месяца", rub(monthMetrics.soldNetRevenue)],
    ["Доля месяца от общей площади проекта", qty(projectAreaShare, "%")],
    ["Комнатность месяца", roomMixText || "Нет данных"],
    ["Отклонение по количеству квартир от среднего месяца", signedQty(monthMetrics.soldCount - averageApartmentsOtherMonths, " шт.")],
    ["Продано метров за месяц", qty(monthMetrics.soldArea, " м2")],
  ]);
}

function renderDashboard() {
  const totals = calculate();
  document.querySelector("#currentDateTime").textContent = formatDateTime.format(new Date());
  const targetBeforeCommission = numberValue(state.settings.targetApartmentsCommission);
  const apartmentsToSellBeforeCommission = totals.apartmentsToSellBeforeCommission;
  const apartmentsPerMonth = totals.monthsLeft > 0 ? apartmentsToSellBeforeCommission / totals.monthsLeft : 0;
  const preCommissionPriceM2 = numberValue(state.settings.preCommissionPriceM2);
  const preCommissionArea = apartmentsToSellBeforeCommission * totals.averageRemainingArea;
  const preCommissionAreaPerMonth = totals.monthsLeft > 0 ? preCommissionArea / totals.monthsLeft : 0;
  const plannedPreCommissionRevenue = totals.plannedPreCommissionRevenue;
  const totalByCommission = totals.soldCount + apartmentsToSellBeforeCommission;
  const afterCommissionApartments = Math.max(0, numberValue(state.settings.totalApartments) - totalByCommission);
  const afterCommissionArea = afterCommissionApartments * totals.averageRemainingArea;
  const afterCommissionApartmentsPerMonth =
    totals.postCommissionMonths > 0 ? afterCommissionApartments / totals.postCommissionMonths : 0;
  const afterCommissionAreaPerMonth = totals.postCommissionMonths > 0 ? afterCommissionArea / totals.postCommissionMonths : 0;
  const breakEven = scenarioMetrics(totals, plannedPreCommissionRevenue, afterCommissionArea, 0);
  const profit10 = scenarioMetrics(totals, plannedPreCommissionRevenue, afterCommissionArea, 0.1);
  const profit20 = scenarioMetrics(totals, plannedPreCommissionRevenue, afterCommissionArea, 0.2);

  const kpis = [
    ["Продано квартир", qty(totals.soldCount, " шт."), "по вкладке продаж"],
    ["Продано метров", qty(totals.soldArea, " м2"), "суммарная площадь ДДУ"],
    ["Средняя цена м2 проданных", rub(totals.averageGrossM2), "грязная стоимость"],
    ["Средняя чистая цена м2", rub(totals.averageNetM2), "по чистой цене метра"],
    ["Остаток квартир", qty(totals.remainingCount, " шт."), "с учетом продаж"],
    ["Остаток метров", qty(totals.remainingArea, " м2"), "по заполненным остаткам"],
    ["План по заключенным ДДУ", rub(plannedPreCommissionRevenue), `по ${rub(preCommissionPriceM2)} за м2`],
    ["Средняя цена м2 после ввода", rub(profit10.priceM2), "по сценарию +10% прибыль"],
  ];

  document.querySelector("#kpiGrid").innerHTML = kpis
    .map(
      ([label, value, foot]) => `
        <article class="kpi-card">
          <span class="kpi-label">${label}</span>
          <span class="kpi-value">${value}</span>
          <span class="kpi-foot">${foot}</span>
        </article>
      `,
    )
    .join("");

  document.querySelector("#monthsLeftText").textContent =
    totals.monthsLeft > 0 ? `${totals.monthsLeft} мес. до ввода` : "срок ввода наступил";

  renderMetricList("#commissionPlan", [
    ["Осталось продать до ввода", qty(apartmentsToSellBeforeCommission, " шт.")],
    ["План квартир до ввода всего", qty(targetBeforeCommission, " шт.")],
    ["Продано в зачет плана", qty(totals.soldTowardCommissionPlan, " шт.")],
    ["Площадь продаж до ввода", qty(preCommissionArea, " м2")],
    ["Нужно продавать метров", qty(preCommissionAreaPerMonth, " м2/мес.")],
    ["Цена продажи м2/₽ до ввода", rub(preCommissionPriceM2)],
    ["План по заключенным ДДУ", rub(plannedPreCommissionRevenue)],
    ["Нужно продавать в месяц", qty(apartmentsPerMonth, " шт.")],
  ]);

  renderMetricList("#afterCommissionPlan", [
    ["Квартир останется после ввода", qty(afterCommissionApartments, " шт.")],
    ["Ориентировочно метров после ввода", qty(afterCommissionArea, " м2")],
    ["Период продаж после ввода", qty(totals.postCommissionMonths, " мес.")],
    ["Нужно продавать после ввода", qty(afterCommissionApartmentsPerMonth, " шт./мес.")],
    ["Нужно продавать метров", qty(afterCommissionAreaPerMonth, " м2/мес.")],
  ]);

  const scenarioRows = [
    [
      "Безубыточность",
      scenarioMetrics(totals, plannedPreCommissionRevenue, afterCommissionArea, 0),
      `до ввода по ${rub(preCommissionPriceM2)} / м2`,
    ],
    ["+10% прибыль", profit10, ""],
    ["+20% прибыль", profit20, ""],
  ];
  document.querySelector("#scenarioGrid").innerHTML = scenarioRows
    .map(
      ([title, scenario, note]) => `
        <article class="scenario-card">
          <h3>${title}</h3>
          <strong>${rub(scenario.priceM2)} / м2 после ввода</strong>
          <span>Нужно выручить: ${rub(scenario.revenue)}</span>
          <span>ДДУ заключены: ${rub(scenario.dduSignedRevenue)}</span>
          <span>Сумма ДДУ на 31.03.2027: ${rub(totals.dduReleaseAmount)}</span>
          <span>Вычитаеся при вводе: ${rub(scenario.deductionsBeforeCommission)}</span>
          <span>После ввода добрать: ${rub(scenario.afterCommissionRevenue)}</span>
          ${note ? `<span>${note}</span>` : ""}
        </article>
      `,
    )
    .join("");

  const monthlyInterest = (numberValue(state.settings.loanPrincipal) * numberValue(state.settings.loanRate)) / 100 / 12;
  const postCommissionMonthlyInterest =
    (totals.remainingMainDebtAfterDdu * numberValue(state.settings.postCommissionLoanRate)) / 100 / 12 +
    (totals.remainingCompletionDebtAfterDdu * numberValue(state.settings.postCommissionCompletionRate)) /
      100 /
      12;
  const estimatedInterestAtCommission =
    totals.accruedInterestToToday + totals.futureInterestToCommission;
  const dduCoversInterest = Math.min(totals.dduReleaseAmount, totals.interestAtCommission);
  const dduCoversMainDebt = Math.min(
    Math.max(0, totals.dduReleaseAmount - totals.interestAtCommission),
    numberValue(state.settings.loanPrincipal),
  );
  const creditCalculationRows = [
    [
      "Кредитная масса на ввод",
      `${rub(state.settings.loanPrincipal)} + ${rub(state.settings.completionFinancing)} + ${rub(totals.interestAtCommission)} = ${rub(totals.creditMassAtCommission)}`,
    ],
    [
      "Сумма ДДУ на 31.03.2027",
      `${rub(totals.dduReleaseAmount)} раскрывается при вводе дома в эксплуатацию`,
    ],
    [
      "ДДУ закрывает проценты",
      `${rub(dduCoversInterest)} из накопленных процентов ${rub(totals.interestAtCommission)}`,
    ],
    [
      "ДДУ гасит тело основного кредита",
      `${rub(dduCoversMainDebt)} из основного кредита ${rub(state.settings.loanPrincipal)}`,
    ],
    [
      "Остатки после раскрытия ДДУ",
      `основной кредит ${rub(totals.remainingMainDebtAfterDdu)} + дострой ${rub(totals.remainingCompletionDebtAfterDdu)} = ${rub(totals.creditMassAfterDdu)}`,
    ],
    [
      "Проценты после ввода до 31.03.2028",
      `${rub(totals.mainInterestAfterCommission)} + ${rub(totals.completionInterestAfterCommission)} = ${rub(totals.mainInterestAfterCommission + totals.completionInterestAfterCommission)}`,
    ],
    [
      "Потребность проекта до 31.03.2028",
      `${rub(totals.creditMassAtCommission)} + ${rub(totals.mainInterestAfterCommission)} + ${rub(totals.completionInterestAfterCommission)} = ${rub(totals.requiredRevenue)}`,
    ],
    [
      "После раскрытия ДДУ нужно добрать",
      `${rub(totals.requiredRevenue)} - ${rub(totals.dduReleaseAmount)} = ${rub(totals.requiredRevenueLeft)}`,
    ],
  ];
  const creditGroups = [
    [
      "Основной кредит",
      [
        ["Тело кредита", rub(state.settings.loanPrincipal)],
        ["Накопленные проценты на сегодня", rub(totals.accruedInterestToToday)],
        ["Ставка до ввода", qty(state.settings.loanRate, "% годовых")],
        ["Проценты до 31.03.2027", rub(totals.futureInterestToCommission)],
        ["Ориентировочная сумма процентов на ввод", rub(estimatedInterestAtCommission)],
        ["Ставка после ввода", qty(state.settings.postCommissionLoanRate, "% годовых")],
        ["Проценты до 31.03.2028", rub(totals.mainInterestAfterCommission)],
      ],
    ],
    [
      "Кредит на дострой",
      [
        ["Сумма достроя", rub(state.settings.completionFinancing)],
        ["Ставка до ввода", qty(state.settings.completionRate, "% годовых")],
        [
          "Ориентировочная сумма процентов на ввод",
          rub(totals.completionInterestToToday + totals.completionInterestToCommission),
        ],
        ["Ставка после ввода", qty(state.settings.postCommissionCompletionRate, "% годовых")],
        ["Проценты до 31.03.2028", rub(totals.completionInterestAfterCommission)],
      ],
    ],
    [
      "ДДУ заключены",
      [
        ["ДДУ заключены", rub(totals.newSoldRevenue)],
        ["План по ДДУ до 31.03.2027", rub(totals.plannedPreCommissionRevenue)],
        ["Сумма ДДУ на 31.03.2027", rub(totals.dduReleaseAmount)],
      ],
    ],
    [
      "Итоговая нагрузка",
      [
        ["Потребность проекта до 31.03.2028", rub(totals.requiredRevenue)],
        ["Проценты в месяц до ввода", rub(monthlyInterest)],
        ["Проценты в месяц после ввода", rub(postCommissionMonthlyInterest)],
      ],
    ],
  ];
  document.querySelector("#creditGrid").innerHTML = creditGroups
    .map(
      ([title, rows]) => `
        <section class="credit-section">
          <h3>${title}</h3>
          ${rows
            .map(
              ([label, value]) => `
                <div class="metric-row">
                  <span class="metric-label">${label}</span>
                  <span class="metric-value">${value}</span>
                </div>
              `,
            )
            .join("")}
        </section>
      `,
    )
    .join("") + `
      <section class="credit-total">
        <span>Остаток кредитной массы на дату ввода дома в эксплуатацию</span>
        <strong>${rub(totals.creditMassAfterDdu)}</strong>
      </section>
      <details class="credit-explanation">
        <summary>Расшифровка расчета потребности проекта</summary>
        <p>Логика расчета: к дате ввода собираем кредитную массу, при вводе раскрываем ДДУ и уменьшаем долг, затем считаем проценты на остаток до 31.03.2028.</p>
        <div class="calculation-list">
          ${creditCalculationRows
            .map(
              ([label, value]) => `
                <div class="calculation-row">
                  <span>${label}</span>
                  <strong>${value}</strong>
                </div>
              `,
            )
            .join("")}
        </div>
      </details>`;

  return totals;
}

function renderMetricList(selector, rows) {
  document.querySelector(selector).innerHTML = rows
    .map(
      ([label, value]) => `
        <div class="metric-row">
          <span class="metric-label">${label}</span>
          <span class="metric-value">${value}</span>
        </div>
      `,
    )
    .join("");
}

function renderSales() {
  document.querySelector("#roomStockGrid").innerHTML = roomStockRows()
    .map(
      (row) => `
        <article class="room-stock-card">
          <span>${row.title}</span>
          <strong>${qty(row.left, " шт.")}</strong>
          <small>продано ${qty(row.sold, " шт.")} из ${qty(row.total, " шт.")}</small>
        </article>
      `,
    )
    .join("");

  const rows = state.sales
    .map(
      (sale, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${qty(sale.area, " м2")}</td>
        <td>${rub(sale.totalPrice)}</td>
        <td>${rub(sale.cleanTotal || 0)}</td>
        <td>${rub(sale.grossM2)}</td>
        <td>${rub(sale.netM2)}</td>
        <td>${escapeHtml(formatDateRu(sale.dduDate))}</td>
        <td>${escapeHtml(sale.rooms || "")}</td>
        <td>${escapeHtml(sale.paymentMethod || "")}</td>
        <td>${escapeHtml(sale.dealStatus || "")}</td>
      </tr>
    `,
    )
    .join("");
  document.querySelector("#salesRows").innerHTML = rows || emptyRow("Продажи пока не добавлены.", 10);
}

function renderSettings() {
  document.querySelectorAll("[data-setting]").forEach((input) => {
    if (input.type === "checkbox") {
      input.checked = Boolean(state.settings[input.dataset.setting]);
    } else {
      input.value = state.settings[input.dataset.setting] ?? "";
    }
  });

  const rows = state.apartments
    .map(
      (apartment, index) => `
      <tr>
        <td><input data-apartment="${index}" data-field="number" value="${escapeHtml(apartment.number)}" /></td>
        <td><input data-apartment="${index}" data-field="section" value="${escapeHtml(apartment.section)}" /></td>
        <td><input data-apartment="${index}" data-field="floor" type="number" step="1" value="${apartment.floor}" /></td>
        <td><input data-apartment="${index}" data-field="area" type="number" min="0" step="0.01" value="${apartment.area}" /></td>
        <td><input data-apartment="${index}" data-field="plannedM2" type="number" min="0" step="1" value="${apartment.plannedM2}" /></td>
        <td>
          <select data-apartment="${index}" data-field="status">
            <option value="available" ${apartment.status === "available" ? "selected" : ""}>Свободна</option>
            <option value="reserved" ${apartment.status === "reserved" ? "selected" : ""}>Бронь</option>
            <option value="sold" ${apartment.status === "sold" ? "selected" : ""}>Продана</option>
          </select>
        </td>
        <td><button class="delete-button" data-delete-apartment="${index}">Удалить</button></td>
      </tr>
    `,
    )
    .join("");
  document.querySelector("#apartmentRows").innerHTML = rows || emptyRow("Остатки пока не заполнены.", 7);
}

function emptyRow(text, colspan = 8) {
  return `<tr><td colspan="${colspan}" class="warning">${text}</td></tr>`;
}

function formatExtraData(extraData) {
  if (!extraData || typeof extraData !== "object") return "";
  return Object.entries(extraData)
    .filter(([, value]) => value !== "" && value !== null && value !== undefined)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function normalizeHeader(value) {
  return String(value ?? "")
    .toLowerCase()
    .replaceAll("ё", "е")
    .replace(/[^a-zа-я0-9]+/g, " ")
    .trim();
}

function toNumber(value) {
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  const normalized = String(value ?? "")
    .replace(/\s/g, "")
    .replace(",", ".")
    .replace(/[^\d.-]/g, "");
  return numberValue(normalized);
}

function toDateInput(value) {
  if (!value) return "";
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString().slice(0, 10);
  if (typeof value === "number" && window.XLSX?.SSF) {
    const parsed = window.XLSX.SSF.parse_date_code(value);
    if (parsed) {
      return `${parsed.y}-${String(parsed.m).padStart(2, "0")}-${String(parsed.d).padStart(2, "0")}`;
    }
  }
  const text = String(value).trim();
  const ruMatch = text.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})$/);
  if (ruMatch) {
    const year = ruMatch[3].length === 2 ? `20${ruMatch[3]}` : ruMatch[3];
    return `${year}-${ruMatch[2].padStart(2, "0")}-${ruMatch[1].padStart(2, "0")}`;
  }
  const date = new Date(text);
  return Number.isNaN(date.getTime()) ? "" : date.toISOString().slice(0, 10);
}

function findColumn(headers, patterns) {
  return headers.findIndex((header) => patterns.some((pattern) => header.includes(pattern)));
}

function excelColumn(row, letter) {
  return row.__excelColumns?.[letter] ?? "";
}

function columnLetter(index) {
  let letter = "";
  let cursor = index + 1;
  while (cursor > 0) {
    const remainder = (cursor - 1) % 26;
    letter = String.fromCharCode(65 + remainder) + letter;
    cursor = Math.floor((cursor - remainder) / 26);
  }
  return letter;
}

function rowObjectFromValues(headers, values) {
  const row = Object.fromEntries(headers.map((header, index) => [header || `Колонка ${index + 1}`, values[index] ?? ""]));
  row.__excelColumns = Object.fromEntries(values.map((value, index) => [columnLetter(index), value ?? ""]));
  return row;
}

function saleFromObject(row) {
  const entries = Object.entries(row);
  const headers = entries.map(([key]) => normalizeHeader(key));
  const take = (patterns) => {
    const index = findColumn(headers, patterns);
    return index >= 0 ? entries[index][1] : "";
  };

  const rooms = take(["комн"]);
  const area = take(["площадь", "кв м", "м2", "м 2", "s"]);
  const totalPrice = excelColumn(row, "K") || take(["стоимость", "сумма", "цена в дду", "цена дду", "цена квартиры", "договор"]);
  const grossM2 = excelColumn(row, "L") || take(["гряз", "цена кв м", "цена кв", "цена м2", "цена за м2", "стоимость м2"]);
  const cleanTotal = excelColumn(row, "V") || take(["стоимость чист", "чистая стоимость"]);
  const netM2 = excelColumn(row, "W") || take(["м2 чист", "чистый м2", "чист", "чистая"]);
  const dduDate = take(["дата дду", "дата заключ", "дду", "дата договора"]);
  const paymentMethod = take(["способ оплаты", "оплата"]);
  const dealStatus = take(["статус сделки", "статус"]);

  const parsedArea = toNumber(area);
  const parsedTotal = toNumber(totalPrice);
  const parsedGross = toNumber(grossM2) || (parsedArea > 0 ? Math.round(parsedTotal / parsedArea) : 0);
  const parsedCleanTotal = toNumber(cleanTotal);
  const parsedNet = toNumber(netM2);

  return {
    area: parsedArea,
    totalPrice: parsedTotal,
    cleanTotal: parsedCleanTotal,
    grossM2: parsedGross,
    netM2: parsedNet,
    dduDate: toDateInput(dduDate),
    rooms: String(rooms ?? "").trim(),
    paymentMethod: String(paymentMethod ?? "").trim(),
    dealStatus: String(dealStatus ?? "").trim(),
  };
}

function saleDateTime(sale) {
  const date = parseLocalDate(sale.dduDate);
  return date ? date.getTime() : Number.MAX_SAFE_INTEGER;
}

function sortSalesByDate(sales) {
  return [...sales].sort((left, right) => saleDateTime(left) - saleDateTime(right));
}

function salesDateRange(sales) {
  const dates = sales
    .map((sale) => sale.dduDate)
    .filter(Boolean)
    .sort();
  if (!dates.length) return "";
  const first = formatDateRu(dates[0]);
  const last = formatDateRu(dates[dates.length - 1]);
  return first === last ? first : `${first} - ${last}`;
}

function parseDelimited(text) {
  const firstLine = text.split(/\r?\n/, 1)[0] || "";
  const delimiter = ["\t", ";", ","].sort((a, b) => firstLine.split(b).length - firstLine.split(a).length)[0];
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === delimiter && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => value.trim() !== "")) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  row.push(cell);
  if (row.some((value) => value.trim() !== "")) rows.push(row);
  const headers = rows.shift() || [];
  return rows.map((values) => rowObjectFromValues(headers, values));
}

async function readDealsFile(file) {
  const extension = file.name.split(".").pop().toLowerCase();
  if (extension === "csv" || extension === "tsv") {
    return parseDelimited(await file.text());
  }
  if (!window.XLSX) {
    throw new Error("Для Excel-файла нужен интернет-доступ к библиотеке XLSX. Выгрузите таблицу в CSV и загрузите CSV.");
  }
  const data = await file.arrayBuffer();
  const workbook = window.XLSX.read(data, { type: "array", cellDates: true });
  const sheetName =
    workbook.SheetNames.find((name) => normalizeHeader(name) === "сделки по караваю") ||
    workbook.SheetNames.find((name) => normalizeHeader(name).includes("сделки") && normalizeHeader(name).includes("караваю"));
  if (!sheetName) throw new Error("Не нашел вкладку “Сделки по Караваю” или “Сделки все по Караваю” в файле.");
  const rows = window.XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1, defval: "", raw: true });
  const headers = rows.shift() || [];
  return rows.map((values) => rowObjectFromValues(headers, values));
}

async function importDealsFile(file) {
  const status = document.querySelector("#syncStatus");
  status.textContent = "Читаю файл...";
  const rows = await readDealsFile(file);
  const sales = sortSalesByDate(
    rows.map(saleFromObject).filter((sale) => sale.area || sale.totalPrice || sale.cleanTotal || sale.dduDate),
  );
  if (!sales.length) throw new Error("В листе “Сделки по Караваю” не нашел строк продаж.");
  state.sales = sales;
  saveState();
  renderAll();
  const period = salesDateRange(sales);
  try {
    await persistRemoteState();
    status.textContent = `Загружено ${sales.length} строк из “Сделки по Караваю”${period ? ` за период ${period}` : ""}. Продажи, главная страница, остатки и сценарии пересчитаны по этому файлу.`;
  } catch (error) {
    status.textContent = `Загружено ${sales.length} строк${period ? ` за период ${period}` : ""}, но общая база не обновилась. На этом устройстве данные уже пересчитаны, старую базу не подпускаю к перезаписи.`;
  }
}

function renderAll() {
  const totals = renderDashboard();
  renderAnalytics(totals);
  renderSales();
  renderSettings();
}

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.tab === "settings") {
      const password = window.prompt("Введите пароль для раздела “Параметры и остатки”");
      if (password !== SETTINGS_PASSWORD) {
        if (password !== null) window.alert("Неверный пароль");
        return;
      }
    }
    document.querySelectorAll(".tab, .tab-panel").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${button.dataset.tab}`).classList.add("active");
  });
});

document.querySelector("#addApartment").addEventListener("click", () => {
  state.apartments.push({ number: "", section: "", floor: "", area: 0, plannedM2: 0, status: "available" });
  saveState();
  renderAll();
});

document.querySelector("#saveSettings").addEventListener("click", async () => {
  saveState();
  renderAll();
  const status = document.querySelector("#saveStatus");
  try {
    await persistRemoteState();
    status.textContent = `Сохранено ${formatDateTime.format(new Date())}`;
  } catch (error) {
    status.textContent = "Сохранил на этом устройстве, но общая база пока не подтвердила обновление.";
  }
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (target.matches("[data-setting]")) {
    const key = target.dataset.setting;
    if (target.type === "checkbox") {
      state.settings[key] = target.checked;
    } else {
      state.settings[key] = target.type === "date" ? target.value : numberValue(target.value);
    }
    saveState();
    document.querySelector("#saveStatus").textContent = "Изменения записаны. Нажмите “Сохранить” для подтверждения.";
    renderDashboard();
  }

  if (target.matches("[data-sale]")) {
    const sale = state.sales[Number(target.dataset.sale)];
    const field = target.dataset.field;
    sale[field] = target.type === "number" ? numberValue(target.value) : target.value;
    if (field === "area" || field === "totalPrice") {
      sale.grossM2 = numberValue(sale.area) > 0 ? Math.round(numberValue(sale.totalPrice) / numberValue(sale.area)) : 0;
    }
    if (field === "area" || field === "cleanTotal") {
      sale.netM2 = numberValue(sale.area) > 0 ? Math.round(numberValue(sale.cleanTotal) / numberValue(sale.area)) : 0;
    }
    saveState();
    renderDashboard();
  }

  if (target.matches("[data-apartment]")) {
    const apartment = state.apartments[Number(target.dataset.apartment)];
    const field = target.dataset.field;
    apartment[field] = target.type === "number" ? numberValue(target.value) : target.value;
    saveState();
    document.querySelector("#saveStatus").textContent = "Изменения записаны. Нажмите “Сохранить” для подтверждения.";
    renderDashboard();
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches("select[data-apartment]")) {
    const apartment = state.apartments[Number(target.dataset.apartment)];
    apartment[target.dataset.field] = target.value;
    saveState();
    document.querySelector("#saveStatus").textContent = "Изменения записаны. Нажмите “Сохранить” для подтверждения.";
    renderDashboard();
  }
});

document.addEventListener("click", (event) => {
  const saleIndex = event.target.dataset.deleteSale;
  const apartmentIndex = event.target.dataset.deleteApartment;
  if (saleIndex !== undefined) {
    state.sales.splice(Number(saleIndex), 1);
    saveState();
    renderAll();
  }
  if (apartmentIndex !== undefined) {
    state.apartments.splice(Number(apartmentIndex), 1);
    saveState();
    renderAll();
  }
});

let reportDetailsWereOpen = null;

function prepareReportPrint() {
  renderDashboard();
  renderSales();
  document.title = `ЖК Каравай отчет ${dateInputFromDate(new Date())}`;
}

function restoreReportPrint() {
  reportDetailsWereOpen = null;
}

document.querySelector("#downloadReport").addEventListener("click", () => {
  prepareReportPrint();
  window.print();
});

window.addEventListener("beforeprint", prepareReportPrint);
window.addEventListener("afterprint", restoreReportPrint);

document.querySelector("#siteLockForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#sitePassword");
  const error = document.querySelector("#siteLockError");
  if (input.value === SITE_PASSWORD) {
    error.textContent = "";
    input.value = "";
    unlockSite();
    return;
  }
  error.textContent = "Неверный пароль";
  input.select();
});

document.querySelector("#importDealsFile").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    await importDealsFile(file);
  } catch (error) {
    document.querySelector("#syncStatus").textContent = error.message;
  } finally {
    event.target.value = "";
  }
});

async function initializeApp() {
  if (sessionStorage.getItem("karavay-site-unlocked") === "true") {
    unlockSite();
  } else {
    lockSite();
  }
  renderAll();
  await refreshRemoteState();
}

initializeApp();
setInterval(() => {
  renderDashboard();
  refreshRemoteState({ silent: true });
}, REMOTE_POLL_INTERVAL_MS);
