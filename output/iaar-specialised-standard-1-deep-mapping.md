# IAAR Specialised — Standard 1 (Policy for Quality Assurance) — Deep Question-Level Mapping

**Purpose:** Pilot for a question-by-question evidence mapping, one level deeper than
`iaar-specialised-cluster-evidence-map.md`. That document mapped against the
checklist's *summarised* "required evidence type." This document maps
against the **actual verbatim Sample Questions** from
`/accreditors/iaar-specialised.md` (§ Standard 1, lines 84–98) — the
questions a real IAAR panel would ask. If this format is useful, the same
pass will be run for Standards 2–10.

**Evidence read for this pass:**
- `/evidence/_shared/Institution-wide Quality Assurance Policy (Team Academy).md`
- `/evidence/professional-masters-applied-ai/appendices/Appendix 21 - Quality Assurance Policy.md`
- `/evidence/bachelors-applied-computing/standard-5-quality-assurance/Quality Assurance Policy.md`
- `/evidence/bachelors-applied-computing/external-validation-feedback/Consolidated Field Representative Feedback.md`
- `/evidence/tech-mba/` (searched — no Tech-MBA-adapted copy exists yet)
- Cluster-wide search for "gender equality / equal opportunities" and "mission/strategy" content

**Correction (per Didem):** Standard 1's QA policy is **institution-wide**, not
programme-specific — that's exactly why it lives in `_shared/` and why
Master's and Bachelor's each have their own copy that is the *same*
institution-wide document with light programme-name substitution (see
`Q1` and each copy's own source footer). Tech MBA not yet having its own
adapted copy is therefore **not a missing-foundational-document gap** — it
is a normal Stage 2 "Case 2: adapt existing evidence" task (per
`folder-developer`'s three-case rule), the same operation already
performed once to produce the Bachelor's copy from the Master's/shared
original. Every place below that originally read "Tech MBA: gap — no
policy exists" has been corrected to reflect this: Tech MBA's Standard 1
answer comes from **adapting** `_shared/Institution-wide Quality
Assurance Policy (Team Academy).md`, not from drafting one from scratch
or treating its absence as a blocking evidence gap. The real open
question for Tech MBA is narrower than "no QA policy" — it's whether the
underlying *governance bodies* the shared policy describes (Exam Board,
QA Team, Educational Council) actually extend to or include Tech MBA
today, which Stage 2 should confirm with Didem before adapting the text
rather than silently assuming yes.

---

## Part A — Standard & Guidelines text requirements (not just Sample Questions)

The config's Standard 1 section (`accreditors/iaar-specialised.md` lines
60–98) has three parts: the **Standard** statement, the **Guidelines**
paragraph, and the **Sample questions** list. Part B below covers the
sample questions; this part checks the Standard/Guidelines requirements
directly, since those are what IAAR actually requires — the sample
questions are illustrative prompts, not the full requirement list.

| Requirement (from Standard/Guidelines text) | Master's | Bachelor's | Tech MBA |
|---|---|---|---|
| Policy is **made public** | ❌ not confirmed published anywhere (= Q2 gap, cluster-wide) | ❌ same | ❌ same — cluster-wide gap, not Tech-MBA-specific |
| **Forms part of strategic management** | ✅ — Executive Board monthly check-ins, periodic performance reviews tie QA to strategic governance | ✅ same | ✅ resolved by adapting the shared policy (Q1) |
| **Internal stakeholders develop/implement** through defined structures/processes | ✅ — Curriculum Team, QA Team, Exam Board, Educational Council all named with roles | ✅ same | ⚠ resolved by adapting the shared policy, **but** confirm these bodies actually extend to Tech MBA before asserting it |
| **External stakeholders involved** in developing the policy | Described only, no instance | ✅ real instance (Field Representative Feedback) | Described only, once adapted — no instance for Tech MBA either |
| Forms a **cycle for continuous improvement** | ✅ — PDCA cycle explicit and detailed | ✅ same | ✅ resolved by adapting the shared policy |
| **Contributes to institutional accountability** | ⚠ implicit (Executive Board approval, external body oversight) but not framed explicitly as "accountability" | ⚠ same | ⚠ same, once adapted |
| Supports development of a **quality culture** where all members assume responsibility | ✅ — named as a guiding principle | ✅ same | ✅ resolved by adapting the shared policy |
| Reflects the **relationship between research and learning & teaching** | ⚠ not addressed in the QA policy text itself — needs check against Appendix 11 "Faculty Research" (not yet read in this pass) | ⚠ same | ⚠ same, once adapted |
| Takes account of **national context** | ✅ — OCW/NVAO/WHW referenced | ✅ same | ✅ resolved by adapting the shared policy |
| Takes account of **institutional context** | ✅ — Team Academy's own structure/mission described | ✅ same | ✅ resolved by adapting the shared policy |
| Supports **academic integrity and freedom, vigilance against academic fraud** | ⚠ **not in the QA policy document itself**, but genuinely well-covered elsewhere: TER, Assessment Policy, Examination Board Handbook, and the Educational Handbook (which has a dedicated "Academic Integrity Cases" section naming plagiarism explicitly) all address this for Master's/Bachelor's | ⚠ same, well-covered elsewhere | ❌ **real gap, distinct from the QA-policy question** — Tech MBA has no TER, Assessment Policy, or Examination Board Handbook of its own to anchor this in; the Supervision Guide only touches it incidentally |
| Guards against **intolerance or discrimination** | ⚠ scattered — "gender equality"/"equal opportunities" language found in Assessment Policy and TER, not consolidated in QA policy | ⚠ same | ❌ same real gap as above — no Tech MBA regulatory document exists to carry this language |
| **Covers subcontracted/outsourced activities** | ❌ confirmed absent (= Q16 gap, cluster-wide) | ❌ same | ❌ same — cluster-wide gap, not Tech-MBA-specific |

**Read on Part A:** The QA policy document itself is strong on governance/cycle/stakeholder-structure requirements, and — once Didem's correction is applied — that strength extends to Tech MBA through adaptation, not fresh drafting. Two genuine gaps remain, and both are **cluster-wide** (affecting all 3 programmes, not a Tech-MBA-only problem): **(a) research–teaching–learning linkage** isn't addressed in the QA policy text for any programme, and **(b) publication/access and outsourcing** (Q2/Q3/Q16) are unconfirmed everywhere. Separately, **academic integrity/anti-discrimination content is a genuine Tech MBA-specific gap** — not because the QA policy doesn't cover it (it's rightly out of scope there), but because the actual carrier documents (TER, Assessment Policy, Examination Board Handbook) don't exist yet for Tech MBA the way they do for Master's/Bachelor's.

---

## Part B — Sample Questions (verbatim from config)

### Q1. What documents reflect the QA policy?

- **Shared:** `_shared/Institution-wide Quality Assurance Policy (Team Academy).md` — the canonical, institution-wide statement (ESG 1.1–1.10 mapped).
- **Master's:** `Appendix 21 - Quality Assurance Policy.md` — same content, Master's-framed.
- **Bachelor's:** `standard-5-quality-assurance/Quality Assurance Policy.md` — same content, Bachelor's-framed, explicitly cross-references the other two.
- **Tech MBA:** no adapted copy exists yet — but the source document (`_shared/Institution-wide Quality Assurance Policy (Team Academy).md`) is institution-wide and applies to Tech MBA already in principle. Confirmed no Tech-MBA-specific copy exists in `/evidence/tech-mba/`, same as the situation before the Bachelor's copy was adapted.

**Verdict:** Answerable and strong for Master's/Bachelor's (one shared document, two adapted copies). **For Tech MBA, this is a Stage 2 adaptation task (Case 2), not a missing-evidence gap** — the same operation that already produced the Bachelor's copy from the shared/Master's original.

---

### Q2. Where published — open or internal only?

- None of the three QA policy documents states a publication channel (public website page vs. internal document repository). The document describes *what* the policy is, not *where a prospective student, employer, or panel member could go to read it today*.
- No evidence anywhere in the pool (including Standard 8 public-information sources) confirms the QA policy is live on a public website.

**Verdict:** **Gap.** This is a factual question with a concrete real-world answer (either it's published somewhere or it isn't yet) — not something Stage 2 can draft around. Needs a direct answer from Didem: is the QA policy currently public, and if so, where?

---

### Q3. Available to teaching staff, employees, students, employers?

- No explicit distribution/access statement in any QA policy copy. The Organisational Structure document implies staff awareness (QA Team, Exam Board, Educational Council all named as internal actors), but nothing states the policy document itself is actively distributed to or accessible by staff, students, or employers specifically.

**Verdict:** **Gap** — same as Q2, this is a factual access-and-distribution question, not a policy-design question. Real answer needed, not inferable from what's written.

---

### Q4. Do other institutions/stakeholders participate in designing it?

- **Bachelor's — strong, concrete evidence:** `Consolidated Field Representative Feedback.md` — 18 verbatim field-representative comments (Harun Yılmaz, Abdullah Karasan, Bernardo Nunes, Leonidas, HBO-i reviewers) with an institutional Decision/Action table showing real engagement (several items "Accept," one "Priority" correction). This is genuine, dated (2026), external-stakeholder involvement — though it is about *programme content* (brochure, curriculum, learning outcomes) rather than the *QA policy document itself*.
- **Master's / Tech MBA:** no equivalent field-representative or external-stakeholder review exists for the QA policy or curriculum.
- The QA policy text itself states field representatives and knowledge partners are structurally involved (org chart), but this is a description of intended process, not a record of an instance of it happening — except for the Bachelor's, where the Consolidated Feedback document *is* that instance.

**Verdict:** Bachelor's can honestly cite a real example. Master's and Tech MBA can only describe the intended mechanism (acceptable under ex-ante framing, but should not imply an instance occurred when none did).

---

### Q5. How did the QA policy change over time?

- No revision history, version log, or changelog exists for the QA policy document in any programme's evidence.
- Consistent with ex-ante status (no prior cycle exists for a not-yet-running programme) — but the checklist's ex-ante note applies to *track-record* evidence types generically; this question is specifically about the *policy document's own history*, which genuinely cannot exist yet for a first-time policy.

**Verdict:** **Expected absence, not a gap** — state plainly that this is a first version, no revision history yet. Consistent with ex-ante framing; Stage 2 should not invent a version history.

---

### Q6. Results of assessing stakeholder satisfaction with the QA policy?

- No satisfaction-survey instrument or results exist anywhere in the pool for the QA policy specifically. (The policy text *mentions* "qualitative or quantitative data on learner satisfaction" as a tracked data category under ESG 1.7 Information Management — but that's a category description, not an actual survey or result.)
- This was already flagged in the earlier cluster-wide evidence map as a Standard 1 gap ("no dedicated satisfaction-assessment instrument").

**Verdict:** **Real gap**, confirmed at question level. For ex-ante framing, Stage 2 can honestly state the *intended* mechanism (survey via LMS, reflections) but cannot cite results, because none exist for a policy/programme not yet running.

---

### Q7. Does the EP match the stated mission/strategy of the EO?

- The QA policy documents open with a mission-like statement ("bridge the global skills gap... develop talent for the labour market") repeated near-identically across Master's/Bachelor's copies.
- `Institution Organisational Structure (Team Academy).md` was checked and also touches strategic framing, but no single **dedicated institutional mission/strategy document** exists separate from the QA policy's own preamble.
- Whether each of the 3 programmes explicitly maps back to that mission statement (rather than the mission statement simply being repeated verbatim in each policy copy) is not demonstrated — no document explicitly traces "programme X's objectives ← institutional mission element Y."

**Verdict:** Partially answerable (a mission statement exists and is repeated), but the *explicit mapping* from each EP's objectives to that mission is not evidenced — this is more a drafting task for Stage 2 (connecting existing programme-outcome documents to the existing mission statement) than a missing-evidence gap.

---

### Q8. How is research–teaching–learning linkage reflected?

- No content found anywhere in the QA policy or elsewhere addressing research activity at the institution (Team Academy reads as a practice-based/applied, industry-facing institute — module descriptions reference "Faculty Research," e.g. Master's Appendix 11 "Faculty Research," but that file wasn't reviewed in this pass; the QA policy itself is silent on research–teaching–learning linkage).

**Verdict:** **Likely gap in the QA policy document itself** — even if faculty research activity exists elsewhere (Appendix 11), the QA policy as the Standard-1 evidence document doesn't state how research connects to teaching/learning. Worth checking Appendix 11 specifically before treating this as a full gap; flagged as **uncertain, needs follow-up read**, not confirmed absent.

---

### Q9. Does the QA policy include business/scientific community/staff/student interaction — mechanisms, examples?

- **Mechanisms:** yes, described — field representatives, knowledge partners, global faculty, Educational Council (student rep body), Town Halls, PDCA "Check" phase feedback loops.
- **Examples (concrete instances):** only for the Bachelor's, via the Consolidated Field Representative Feedback document (real business-community interaction, with real outcomes). No equivalent concrete example exists for Master's or Tech MBA's business-community interaction, and no example exists anywhere of *student* interaction with the QA policy specifically (student involvement via Educational Council is asserted structurally, not evidenced with an instance).

**Verdict:** Mechanism: answerable for all 3. Examples: Bachelor's only (business community); no example anywhere for student interaction specifically.

---

### Q10. Are competences and decision-making processes for EP development defined?

- Yes — QA policy ESG 1.2 section: Curriculum Team designs/develops, Executive Board formally approves. Consistent across Master's/Bachelor's copies.
- Tech MBA: covered once the shared policy is adapted (Q1) — the same institution-wide Curriculum Team/Executive Board structure applies. Worth cross-checking against the Tech MBA Programme Handbook for any Tech-MBA-specific deviation before adapting the text as-is.

**Verdict:** Answerable and clear for Master's/Bachelor's. **For Tech MBA, resolved by the Q1 adaptation**, not a separate gap.

---

### Q11. How transparent is educational process information to students?

- QA policy states curriculum structure/assessment strategies are placed in Educational Handbooks and made available to learners, and learner responsibilities/appeal procedures are documented there too.
- This is corroborated independently by the existence of actual Educational Handbook files for both Master's and Bachelor's (seen in the evidence tree, not re-read in this pass) — so the claim is at least structurally consistent with what's in the pool, not a bare assertion.
- Tech MBA: `Tech MBA Programme Handbook_2024.md` exists and likely serves a similar function, but wasn't cross-checked against this specific question in this pass.

**Verdict:** Answerable for Master's/Bachelor's with real corroborating documents. Tech MBA: probably answerable via its own handbook, but not confirmed in this pass — **follow-up read recommended, not yet a confirmed gap**.

---

### Q12. Are there EP objective/concept revision procedures?

- QA policy states the curriculum team "continuously reviews/improves curriculum... per monitoring/review/improvement guidelines" — but the actual guidelines document is referenced, not included, in the QA policy text.
- For the Bachelor's, the Action Planning and Consolidated Field Representative Feedback documents together **are** a live instance of exactly this procedure being exercised (proposal → decision → action → status).
- No equivalent instance exists for Master's or Tech MBA.

**Verdict:** Procedure described for all (generic); Bachelor's can point to a genuine working example — the strongest evidence in the whole Standard 1 mapping. Master's/Tech MBA: description only, no instance (acceptable ex-ante, but weaker).

---

### Q13. Do developed EPs comply with the EO's regulatory documents?

- Structurally yes — TERs, Assessment Policies, and Examination Board Handbooks exist per programme (Master's, Bachelor's) and are referenced as the governing regulatory layer beneath the QA policy.
- Tech MBA: **no TER, no Assessment Policy, no Examination Board Handbook exists** — so this question cannot be answered affirmatively for Tech MBA; there is no regulatory document to comply with yet.

**Verdict:** Answerable for Master's/Bachelor's. **Confirmed gap for Tech MBA** — consistent with the earlier finding that Tech MBA lacks a governance layer.

---

### Q14. Does the EO have a gender equality/equal opportunities concept?

- Not addressed in any QA policy copy.
- Found elsewhere: `bachelors-applied-computing/standard-3-assessment/Policy on Assessment.md`, `professional-masters-applied-ai/appendices/Appendix 19 - Teaching and Examinations Regulations.md`, and `Appendix 15 - Policy on Assessment.md` all contain "gender equality"/"equal opportunities" language (likely non-discrimination clauses in assessment/admission contexts) — not reviewed line-by-line in this pass, but confirmed present via search.
- No dedicated gender-equality/equal-opportunities policy document exists; the concept appears embedded in assessment-related regulatory documents rather than stated as a standalone institutional concept.

**Verdict:** Partially answerable — real language exists but scattered, not consolidated, and not present at all in the QA policy document itself (where this question is actually asked). Stage 2 should surface and consolidate the existing language rather than draft new claims; worth a quick read of those 3 files to confirm what they actually say before drafting.

---

### Q15. Describe the university's QA system and its application/continuous improvement within the EP.

- Fully answerable — this is effectively what the QA policy document already does (PDCA cycle, four-layer activity/module/certificate/programme structure) for Master's/Bachelor's.
- Tech MBA: covered once the shared policy is adapted (Q1) — the description is institution-wide by design, not something that needs separate authoring for Tech MBA.

**Verdict:** Strong for Master's/Bachelor's (this is the best-covered question in the whole set). **For Tech MBA, resolved by the Q1 adaptation.**

---

### Q16. What activities are outsourced and how is adherence monitored?

- No QA policy copy addresses outsourcing/subcontracting at all, despite the *config's own Guidelines text* (not the sample questions, but the paragraph above them) explicitly stating "The QA policy also covers any elements of an institution's activities that are subcontracted to or carried out by other parties."
- No evidence anywhere in the pool (QA policy, org structure, or elsewhere reviewed) names any outsourced/subcontracted activity or a monitoring mechanism for one.

**Verdict:** **Gap**, and specifically flagged because it's not just a sample question but something the Guidelines text itself says the policy "also covers" — meaning IAAR would expect to see this addressed even if not directly asked. Needs a real answer: does Team Academy outsource any activity (e.g. hosting, some faculty delivery, assessment support)? If none, state that plainly; if some exist, they need describing.

---

## Summary — Standard 1, question-level

| # | Question | Master's | Bachelor's | Tech MBA |
|---|---|---|---|---|
| 1 | Documents reflecting QA policy | ✅ | ✅ | ✅ once adapted from `_shared/` (Stage 2 task, not a gap) |
| 2 | Published where | ❌ gap (all) | ❌ gap (all) | ❌ gap (all) |
| 3 | Available to whom | ❌ gap (all) | ❌ gap (all) | ❌ gap (all) |
| 4 | External participation in design | Described only | ✅ real instance | Described only, once adapted |
| 5 | Change over time | Expected absence (ex-ante) | Expected absence | Expected absence |
| 6 | Satisfaction results | ❌ gap (all) | ❌ gap (all) | ❌ gap (all) |
| 7 | EP–mission match | Partial (mission exists, mapping not explicit) | Partial | Partial, once adapted |
| 8 | Research–teaching linkage | ⚠ uncertain, needs Appendix 11 check | ⚠ uncertain | ⚠ uncertain, once adapted |
| 9 | Business/community/student interaction | Mechanism only | ✅ real example (business) | Mechanism only, once adapted |
| 10 | EP development decision process | ✅ | ✅ | ✅ once adapted |
| 11 | Transparency to students | ✅ (handbook exists) | ✅ (handbook exists) | ⚠ needs check against Tech MBA Programme Handbook |
| 12 | Revision procedures | Described only | ✅ real example (best evidence) | Described only, once adapted |
| 13 | Compliance with regulatory docs | ✅ (TER/Assessment Policy exist) | ✅ | ❌ **real gap** — no TER/Assessment Policy/Examination Board Handbook exists for Tech MBA (distinct from the QA-policy question) |
| 14 | Gender equality/equal opportunities | ⚠ scattered, not in QA policy | ⚠ scattered | ❌ **real gap** — same root cause as Q13, no regulatory document to carry this language |
| 15 | Describe QA system + CI in the EP | ✅ strong | ✅ strong | ✅ once adapted |
| 16 | Outsourcing + monitoring | ❌ gap (all) | ❌ gap (all) | ❌ gap (all) |

**Real, cross-programme gaps that block honest drafting (not ex-ante-excusable, and not resolved by adaptation):**
1. **Q2/Q3 — publication and access channel.** Factual, needs a direct answer from Didem.
2. **Q6 — satisfaction-assessment results.** No instrument exists; can only describe intended mechanism.
3. **Q16 — outsourcing.** The config's own Guidelines text expects this; nothing addresses it anywhere.
4. **Q14 — gender equality/equal opportunities**, not consolidated into the QA policy itself even though it exists elsewhere (for Master's/Bachelor's); genuinely absent for Tech MBA.

**Tech MBA-specific gaps, corrected:** most of Standard 1 (Q1, Q4, Q5, Q7–Q10, Q12, Q15) is **not** a Tech MBA gap at all — the QA policy is institution-wide, so Tech MBA's answer is Stage 2 adapting the same shared document already adapted once for the Bachelor's, the same "Case 2" operation. The genuine Tech MBA-specific gap is narrower: **Q13 and Q14**, because the *separate* regulatory documents (TER, Assessment Policy, Examination Board Handbook) that Master's and Bachelor's have — and that carry the academic-integrity and equal-opportunities language — don't exist yet for Tech MBA. That's a real missing-document gap; the QA policy itself is not.

**Strongest evidence found:** Q12 (revision procedures) and Q9 (stakeholder interaction) for the Bachelor's — the Consolidated Field Representative Feedback + Action Planning pairing is a genuine, dated, ex-ante-appropriate example of the QA cycle actually working. This is worth highlighting to the panel as the cluster's best Standard 1 evidence, even though it technically documents programme-content review rather than QA-policy-document review specifically.
