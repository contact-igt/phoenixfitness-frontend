# Pricing Section — Implementation Plan

## Overview

Three areas of change:
1. **Data** — Update pricing & add new plan types in `constants.ts`
2. **UI Layout** — Two-row grid: Gym plans row + Personal Training row
3. **Component & CSS** — Support two categories of offers per branch

---

## 1. Data Model Changes (`app/data/constants.ts`)

### 1a. Extend `Offer` interface

Add a `category` field to distinguish gym memberships from personal training:

```ts
export interface Offer {
  title: string;
  originalPrice: string;
  price: string;         // base price (+ tax shown in heading)
  perks: string;
  popular?: boolean;
  category: 'gym' | 'pt'; // NEW — gym = membership, pt = personal training
}
```

### 1b. New Pricing Per Branch

> All prices below are base prices (+ applicable tax).
> `originalPrice` (strikethrough) values — **confirm with team** before finalising; placeholders used below.

#### Kannamangala & Budegere Cross (same pricing)

| Plan | Price | Original (MRP) |
|------|-------|----------------|
| Monthly Plan | ₹5,000 | ₹7,000 |
| Quarterly Plan (3M) | ₹10,000 | ₹15,000 |
| Half-Yearly Plan (6M) | ₹15,000 | ₹21,000 |
| Yearly Plan (12M) | ₹20,000 | ₹28,000 |
| PT Level 1 | ₹15,000 | ₹20,000 |
| PT Level 2 | ₹18,000 | ₹24,000 |
| PT Level 3 | ₹20,000 | ₹27,000 |

#### Nallurhalli & Yello Living / Hello Living (same pricing)

| Plan | Price | Original (MRP) |
|------|-------|----------------|
| Monthly Plan | ₹3,000 | ₹4,500 |
| Quarterly Plan (3M) | ₹10,000 | ₹14,000 |
| Half-Yearly Plan (6M) | ₹12,000 | ₹17,000 |
| Yearly Plan (12M) | ₹15,000 | ₹20,000 |
| PT Level 1 | ₹8,000 | ₹12,000 |
| PT Level 2 | ₹12,000 | ₹16,000 |
| PT Level 3 | ₹14,000 | ₹18,000 |

#### Hope Farm

| Plan | Price | Original (MRP) |
|------|-------|----------------|
| Monthly Plan | ₹2,500 | ₹4,000 |
| Quarterly Plan (3M) | ₹6,000 | ₹9,000 |
| Half-Yearly Plan (6M) | ₹8,000 | ₹12,000 |
| Yearly Plan (12M) | ₹10,000 | ₹15,000 |
| PT Level 1 | ₹6,000 | ₹9,000 |
| PT Level 2 | ₹8,000 | ₹11,000 |
| PT Level 3 | ₹10,000 | ₹13,000 |

### 1c. Perks (all cards)

Every card — both gym and PT — will show the two standard perks:
- ✅ Free BCA + Diet Guidelines
- ✅ 2 Onboarding Sessions FREE

Gym plans also keep the existing `perks` line (extension/freezing days) as the primary perk.  
PT plans use the level-specific description as the primary perk.

---

## 2. UI Layout Changes (`Pricing.tsx`)

### Current layout
- Single `div.grid` renders all cards for the selected branch.
- `grid-template-columns: repeat(3, 1fr)` on desktop (3 cards per row).

### New layout

Split into **two separate grids**:

```
┌─────────────────────────────────────────────────────────┐
│           GYM MEMBERSHIP PLANS                          │
│  [Monthly]  [Quarterly]  [Half-Yearly]  [Yearly]        │  ← 4-col grid
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│           PERSONAL TRAINING                             │
│    [PT Level 1]    [PT Level 2]    [PT Level 3]         │  ← 3-col grid
└─────────────────────────────────────────────────────────┘
```

**Component changes in `Pricing.tsx`:**

```tsx
// Filter offers by category
const gymOffers = selectedBranch.offers.filter(o => o.category === 'gym');
const ptOffers  = selectedBranch.offers.filter(o => o.category === 'pt');

// Render gym row
<div className={styles.rowHeading}>Gym Membership</div>
<div className={styles.gymGrid}>
  {gymOffers.map(...)}
</div>

// Render personal training row (if any)
{ptOffers.length > 0 && (
  <>
    <div className={styles.rowHeading}>Personal Training</div>
    <div className={styles.ptGrid}>
      {ptOffers.map(...)}
    </div>
  </>
)}
```

---

## 3. CSS Changes (`styles.module.css`)

### New classes to add

```css
/* Section label between rows */
.rowHeading {
  font-family: 'Anton', sans-serif;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgb(161, 161, 170);
  margin: 3rem 0 1.5rem;
  border-left: 4px solid #BB0D06;
  padding-left: 0.75rem;
}

/* 4-column grid for gym plans */
.gymGrid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;            /* mobile: 1 col */
}

/* 3-column grid for personal training */
.ptGrid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;            /* mobile: 1 col */
}

@media (min-width: 640px) {
  .gymGrid { grid-template-columns: repeat(2, 1fr); }
  .ptGrid  { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .gymGrid { grid-template-columns: repeat(4, 1fr); }
  .ptGrid  { grid-template-columns: repeat(3, 1fr); }
}
```

### Remove / deprecate

- `.grid` class (replaced by `.gymGrid` and `.ptGrid`)
- Existing `@media` rules that targeted `.grid` → update to target both new classes

---

## 4. File-by-File Change Summary

| File | Change |
|------|--------|
| `app/data/constants.ts` | Add `category` to `Offer` interface; update all 5 branches with new pricing + 7 offers each |
| `app/components/Pricing/Pricing.tsx` | Split single grid into `gymOffers` row + `ptOffers` row; add row headings |
| `app/components/Pricing/styles.module.css` | Add `.gymGrid`, `.ptGrid`, `.rowHeading`; update responsive breakpoints |

---

## 5. Open Questions (confirm before implementing)

1. **Original/MRP prices** — The strikethrough prices shown to visitors. Only new prices were provided; placeholder values above need confirmation.
2. **Popular badge** — Which card should show "Most Popular" per branch? Currently Yearly is popular for Kannamangala/Budegere; confirm for all branches.
3. **Personal Training `perks` line** — What text to show as the primary perk bullet for PT Level 1/2/3? (e.g., "8 sessions/month", "16 sessions/month", "unlimited"?) Currently using the level name as placeholder.
4. **"Hello Living" branch** — Is this the same branch as "Yello Living (ITPL)" in the current data? (Assumed yes.)

---

## 6. Implementation Order

1. Answer open questions above (or proceed with placeholders)
2. Update `constants.ts` — data & interface
3. Update `Pricing.tsx` — split grids + row headings
4. Update `styles.module.css` — new CSS classes + responsive rules
5. Verify on dev server at all breakpoints (mobile, tablet, desktop)
