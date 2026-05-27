import { useState } from "react";

const modules = [
  {
    id: 0,
    emoji: "🧭",
    title: "Welcome to Clinical Research",
    subtitle: "Your Foundation",
    color: "#1a3a5c",
    accent: "#4a9eff",
    content: {
      intro: "Clinical research is the process of studying how safe and effective a new drug, device, or treatment is in humans. As a Clinical Research Associate (CRA) or Site Monitor, you are the bridge between the sponsor (the company funding the trial) and the site (the hospital or clinic running the trial).",
      sections: [
        {
          heading: "Key Roles You'll Hear About",
          items: [
            { term: "Sponsor", def: "The company (usually pharma/biotech) that owns the drug/device and funds the study." },
            { term: "CRO (Contract Research Org)", def: "A company hired by the sponsor to run the trial — this is often where CRAs work." },
            { term: "Site / Clinical Site", def: "The hospital, clinic, or doctor's office where patients (subjects) actually participate." },
            { term: "PI (Principal Investigator)", def: "The lead doctor at the site responsible for the study. They sign off on everything." },
            { term: "CRC (Clinical Research Coordinator)", def: "The site staff member who runs day-to-day operations — your closest partner at the site." },
            { term: "CRA / Monitor", def: "That's you! You visit sites to make sure the study is being run correctly and safely." },
          ]
        },
        {
          heading: "Why Monitoring Exists",
          items: [
            { term: "Patient Safety", def: "Ensure subjects are protected and adverse events are reported properly." },
            { term: "Data Integrity", def: "Ensure the data collected is accurate, complete, and trustworthy." },
            { term: "Regulatory Compliance", def: "Make sure the site follows FDA regulations, ICH-GCP guidelines, and the protocol." },
          ]
        },
        {
          heading: "The Holy Trinity of Clinical Research",
          items: [
            { term: "ICH-GCP (E6)", def: "International guidelines for how clinical trials must be conducted. Every CRA must know this document." },
            { term: "The Protocol", def: "The study's rulebook — written by the sponsor. Everything done at the site must follow it." },
            { term: "FDA 21 CFR Parts 11, 50, 54, 56, 312", def: "U.S. federal regulations governing clinical trials. Part 312 covers investigational new drugs (INDs)." },
          ]
        }
      ]
    }
  },
  {
    id: 1,
    emoji: "📋",
    title: "The Protocol",
    subtitle: "The Study Rulebook",
    color: "#1a3a2a",
    accent: "#4adf86",
    content: {
      intro: "The Protocol is the master document written by the sponsor that describes EVERYTHING about the study: what it's testing, who can participate, what procedures happen at each visit, and how data must be collected. As a CRA, you must know this document inside and out.",
      sections: [
        {
          heading: "What's In a Protocol?",
          items: [
            { term: "Study Objectives", def: "What the study is trying to prove (e.g., 'Drug X reduces tumor size by 30% vs placebo')." },
            { term: "Inclusion/Exclusion Criteria", def: "The exact rules for who can and cannot enroll. A subject must meet ALL inclusion and NONE of the exclusion criteria." },
            { term: "Visit Schedule", def: "A table showing exactly what happens at each visit: Screening, Baseline/Randomization, Week 1, Week 4, Week 8, etc." },
            { term: "Procedures & Assessments", def: "Blood draws, vitals, questionnaires, imaging — everything listed per visit." },
            { term: "Endpoints", def: "Primary = the main thing being measured. Secondary = additional outcomes tracked." },
            { term: "Statistical Plan", def: "How the data will be analyzed (sample size, power calculations)." },
          ]
        },
        {
          heading: "Protocol Deviations — A Critical Concept",
          items: [
            { term: "Protocol Deviation", def: "Any departure from the approved protocol. NOT automatically disqualifying but must be documented." },
            { term: "Major Deviation", def: "Could impact subject safety or data integrity. Examples: wrong dose given, ineligible subject enrolled." },
            { term: "Minor Deviation", def: "Unlikely to impact data/safety. Example: visit happened 2 days outside the visit window." },
            { term: "Your Job", def: "Identify deviations, ensure they are documented and reported to the IRB/Sponsor as required." },
          ]
        },
        {
          heading: "Protocol Amendments",
          items: [
            { term: "What is it?", def: "When the sponsor officially changes the protocol, they issue an Amendment. Sites must implement changes only AFTER IRB approval." },
            { term: "CRA's Role", def: "Confirm the site has the current approved version and that all staff have been trained on changes." },
          ]
        }
      ]
    }
  },
  {
    id: 2,
    emoji: "📁",
    title: "The TMF",
    subtitle: "Trial Master File",
    color: "#2a1a3a",
    accent: "#b47aff",
    content: {
      intro: "The Trial Master File (TMF) is the collection of ALL essential documents for a clinical trial. Think of it as the trial's permanent record that proves it was conducted correctly. It can be paper or electronic (eTMF). From the whiteboard: you'll scan and upload required docs into the TMF.",
      sections: [
        {
          heading: "Essential TMF Documents — Know These!",
          items: [
            { term: "Site DOA Log (Delegation of Authority)", def: "Lists every site staff member, their qualifications, and exactly what tasks they are authorized to perform. If someone isn't on the DOA, they cannot perform study tasks." },
            { term: "Protocol & Amendments", def: "Current and all previous versions — with IRB approval date for each." },
            { term: "IRB Approvals", def: "Initial approval + all continuation approvals. The study CANNOT run without a current IRB approval." },
            { term: "Site Staff CVs", def: "Curriculum Vitae for the PI and all study staff. Must be current (updated annually)." },
            { term: "Site Staff GCP Training", def: "Proof that all staff have completed Good Clinical Practice training. Usually required every 2-3 years." },
            { term: "FDA Form 1572", def: "The Investigator's agreement with the FDA. The PI signs this, committing to follow all regulations. Critical document." },
            { term: "Financial Disclosure (FDF)", def: "Form FDA 3454/3455. Discloses any financial interests the investigator has in the sponsor. Required to detect bias." },
            { term: "Investigator's Brochure (IB)", def: "A document from the sponsor summarizing everything known about the investigational drug/device (preclinical data, prior human data, safety info)." },
            { term: "Subject Logs", def: "Enrollment log, screening log — tracks who was screened, enrolled, completed, or discontinued." },
          ]
        },
        {
          heading: "CRA TMF Review — What You're Checking",
          items: [
            { term: "Completeness", def: "Are all required documents present?" },
            { term: "Currency", def: "Are CVs current? Is IRB approval still valid? Is the IB the latest version?" },
            { term: "Accuracy", def: "Are signatures dated correctly? No blank fields on critical documents?" },
            { term: "Filing", def: "Are documents filed in the right sections? Is the eTMF indexed correctly?" },
          ]
        }
      ]
    }
  },
  {
    id: 3,
    emoji: "📝",
    title: "Subject Source",
    subtitle: "The Patient's Truth",
    color: "#3a2a1a",
    accent: "#ffaa4a",
    content: {
      intro: "Source documents are the ORIGINAL records of what happened to a subject. This is the ground truth. Everything in the EDC must trace back to source. Source can be electronic (like Epic — a hospital EHR) or paper. The CRA's job is to verify the EDC matches source exactly.",
      sections: [
        {
          heading: "What Lives in Source Documents",
          items: [
            { term: "Informed Consent Form (ICF)", def: "The most important document in subject source. Proves the subject voluntarily agreed to participate BEFORE any study procedures. Must be signed and dated BEFORE screening." },
            { term: "Documentation of ICF Collection", def: "Notes showing WHEN the ICF was given, who reviewed it with the subject, and that the subject had time to ask questions." },
            { term: "Concomitant Medications (ConMeds)", def: "All medications the subject is taking during the study. Must be documented and checked against protocol exclusion criteria." },
            { term: "Medical History", def: "Pre-existing conditions. Used to verify eligibility and as a baseline." },
            { term: "Study Visit Notes", def: "For EACH visit (Screening, Baseline/Rando, Wk 1, Wk 4, Wk 8...): vitals, physical exam, adverse events, study drug administration, assessments performed." },
          ]
        },
        {
          heading: "Study Visit Flow — A Typical Protocol",
          items: [
            { term: "Screening Visit", def: "Subject is assessed against I/E criteria. Lab work, medical history, physical exam. MUST have signed ICF first." },
            { term: "Baseline / Randomization ('Rando')", def: "Subject confirmed eligible. Randomized to treatment or placebo. Study drug first administered. Day 1." },
            { term: "Treatment Visits (Wk 1, 4, 8...)", def: "Ongoing assessments per visit schedule. Safety labs, vitals, AE review, drug accountability." },
            { term: "End of Study / Follow-Up", def: "Final assessments. Study drug discontinued. Subject may continue in follow-up for safety monitoring." },
          ]
        },
        {
          heading: "Source Data Verification (SDV) — Your Core Job",
          items: [
            { term: "What is SDV?", def: "Comparing what's in the EDC to what's in the source document, line by line." },
            { term: "100% SDV vs. Risk-Based", def: "Old model = check everything. New model = focus on critical data points. Sponsors define the SDV plan." },
            { term: "What to verify", def: "Dates, values (labs, vitals), AE onset/resolution dates, consent date vs. first procedure date, conmeds." },
            { term: "Never accept a copy as source", def: "If the original chart says one thing and a printout says another, the original wins. Always." },
          ]
        }
      ]
    }
  },
  {
    id: 4,
    emoji: "💻",
    title: "EDC / IMP",
    subtitle: "Electronic Data Capture",
    color: "#1a2a3a",
    accent: "#4ad4ff",
    content: {
      intro: "The EDC (Electronic Data Capture) system is where all the study data lives digitally. Common platforms include Medidata Rave and Oracle InForm (both noted on the whiteboard). All data entered in the EDC must be transcribed from source documents — it must match exactly.",
      sections: [
        {
          heading: "Key EDC Concepts",
          items: [
            { term: "CRF (Case Report Form)", def: "The data collection forms within the EDC. One CRF per visit, per subject. This is where the site enters all study data." },
            { term: "Transcription", def: "The process of taking data from source documents and entering it into the EDC. Every data point must have a source document behind it." },
            { term: "Data Must Match", def: "If source says BP was 120/80 and EDC says 120/8 — that's a discrepancy. You find it. You generate a query." },
            { term: "Audit Trail", def: "The EDC records every change made to data, who made it, and when. You CANNOT delete data — only correct with documentation." },
          ]
        },
        {
          heading: "Queries — The CRA's Key Tool",
          items: [
            { term: "What is a Query?", def: "A formal question raised in the EDC when data is missing, inconsistent, or needs clarification." },
            { term: "Who raises them?", def: "CRAs during monitoring visits AND the data management team at the sponsor/CRO." },
            { term: "Who answers them?", def: "The site (CRC or PI). They must respond within the timeframe defined in the protocol — typically 5 days (as shown on the board)." },
            { term: "Open Queries", def: "Unresolved queries. A major red flag on a monitoring visit. High open query rates indicate data quality problems." },
          ]
        },
        {
          heading: "Common EDC Systems to Know",
          items: [
            { term: "Medidata Rave", def: "Industry's most widely used EDC. Likely your first system. Has a companion app for remote source review." },
            { term: "Oracle InForm", def: "Another major platform, used heavily by large pharma companies." },
            { term: "REDCap", def: "Common in academic research. Simpler interface, often used for investigator-initiated studies." },
            { term: "Veeva Vault eTMF", def: "Leading eTMF platform — where you'll upload and manage TMF documents." },
          ]
        }
      ]
    }
  },
  {
    id: 5,
    emoji: "🔬",
    title: "Med Device Logs",
    subtitle: "Equipment & Accountability",
    color: "#1a3a35",
    accent: "#4affdd",
    content: {
      intro: "Medical device logs track any device used in the study — from a glucose meter to a complex infusion pump. If the study involves an investigational device OR a device that produces data (like an ECG machine), the device must be tracked, calibrated, and its data must match the subject source.",
      sections: [
        {
          heading: "What CRAs Check in Device Logs",
          items: [
            { term: "Calibration Records", def: "Devices must be calibrated on schedule. An uncalibrated device = unreliable data = protocol deviation." },
            { term: "Maintenance Logs", def: "Proof the device is being maintained per manufacturer specifications." },
            { term: "Device ID / Serial Numbers", def: "The specific device used for a subject should be traceable. Especially important for investigational devices." },
            { term: "Data Matching", def: "Just like EDC vs source — data from the device log must match what's in the subject's source document AND the EDC." },
          ]
        },
        {
          heading: "Drug Accountability (IMP = Investigational Medicinal Product)",
          items: [
            { term: "What is Drug Accountability?", def: "Tracking every unit of study drug from shipment to dispensing to return/destruction. Every pill, vial, or kit must be accounted for." },
            { term: "Drug Accountability Log", def: "Site maintains a log showing: what was received, what was dispensed to each subject, what was returned by subjects, and what was destroyed." },
            { term: "CRA's Role", def: "Verify the math. Received - Dispensed - Returned = should equal current inventory. Discrepancies must be investigated." },
            { term: "Temperature Monitoring", def: "Study drugs often require specific storage (e.g., refrigerated). CRAs verify temp logs to ensure the drug was never compromised." },
          ]
        }
      ]
    }
  },
  {
    id: 6,
    emoji: "📊",
    title: "The Monitor Visit (IMV)",
    subtitle: "Putting It All Together",
    color: "#3a1a1a",
    accent: "#ff6b6b",
    content: {
      intro: "The Interim Monitoring Visit (IMV) — or just 'Monitor Visit' — is when the CRA goes to the site (or connects remotely) to review all the elements we've covered. It follows a defined process and ends with a written report. The whiteboard shows the complete flow.",
      sections: [
        {
          heading: "Types of Monitoring Visits",
          items: [
            { term: "Site Qualification Visit (SQV)", def: "BEFORE the study starts. Assess if the site has the staff, space, equipment, and patient population to run the study." },
            { term: "Site Initiation Visit (SIV)", def: "BEFORE first subject enrolled. Train all site staff on the protocol, EDC, and procedures. Set up the site." },
            { term: "Interim Monitoring Visit (IMV)", def: "During the study. This is the routine monitoring visit shown on the whiteboard. Happens regularly (monthly, quarterly, etc.)." },
            { term: "Close-Out Visit (COV)", def: "After last subject last visit. Ensure all data is complete, all documents are filed, study drug accounted for." },
          ]
        },
        {
          heading: "The IMV Workflow (from the Whiteboard)",
          items: [
            { term: "Step 1: Review Protocol", def: "Confirm all monitoring against current protocol version. This anchors everything." },
            { term: "Step 2: TMF Review", def: "Verify all essential documents are present, current, and complete. Scan & upload any missing docs." },
            { term: "Step 3: Subject Source Review", def: "Review consent documentation, visit notes, conmeds, and medical history for enrolled subjects." },
            { term: "Step 4: SDV in EDC/IMP", def: "Verify source data is correctly transcribed into EDC. Generate queries for discrepancies. Answer within 5 days." },
            { term: "Step 5: Med Device / Drug Accountability", def: "Verify device logs and drug accountability. All data must match subject source." },
            { term: "Step 6: Sign the Monitor Visit Log", def: "ALWAYS sign the site's Monitor Visit Log before you leave. Proof you were there." },
            { term: "Step 7: Write the IMV Report", def: "Document ALL findings. Every issue, every query, every observation goes in the report. Due within 5-10 business days typically." },
          ]
        },
        {
          heading: "The IMV Report — Critical Skills",
          items: [
            { term: "What goes in it?", def: "Visit date/site/personnel, what was reviewed, findings (issues found), follow-up items with due dates, commendations." },
            { term: "Follow-Up Letter", def: "Sent to the site after the visit summarizing required corrective actions. Site must respond." },
            { term: "CAPA", def: "Corrective and Preventive Action — the site's formal plan to fix identified issues and prevent recurrence." },
            { term: "Tone", def: "Professional, factual, not accusatory. You're a partner helping the site succeed, not an auditor trying to catch them." },
          ]
        }
      ]
    }
  },
  {
    id: 7,
    emoji: "🛡️",
    title: "Safety Reporting",
    subtitle: "The Non-Negotiable",
    color: "#3a1a2a",
    accent: "#ff4aaa",
    content: {
      intro: "Patient safety is the #1 priority in clinical research. No data point is more important than an adverse event. As a CRA, you must understand safety reporting inside and out — missed or late safety reports are among the most serious regulatory violations.",
      sections: [
        {
          heading: "Safety Terminology",
          items: [
            { term: "Adverse Event (AE)", def: "Any undesirable medical occurrence in a subject during the study. May or may not be related to the study drug." },
            { term: "Serious Adverse Event (SAE)", def: "An AE that results in: death, hospitalization, life-threatening situation, persistent disability, congenital anomaly, or is otherwise medically significant. Requires expedited reporting." },
            { term: "SUSAR", def: "Suspected Unexpected Serious Adverse Reaction. When an SAE is both unexpected (not in the IB) and suspected to be related to study drug. Fastest reporting timelines (7 or 15 days to FDA)." },
            { term: "Causality", def: "The PI's assessment of whether the AE is related to the study drug. Options: related, possibly related, unlikely related, not related." },
          ]
        },
        {
          heading: "Reporting Timelines to Know",
          items: [
            { term: "SAE to Sponsor", def: "Usually within 24 hours of site becoming aware. Some protocols require immediate notification." },
            { term: "SUSAR to FDA", def: "Fatal or life-threatening: 7 calendar days. All others: 15 calendar days." },
            { term: "IRB Reporting", def: "SAEs and protocol deviations must be reported to the IRB per their requirements. Usually within 5-10 business days." },
            { term: "CRA's Role", def: "Verify SAEs are documented completely, causality assessed by PI, and reported to sponsor on time. Late reports are a red flag in your IMV." },
          ]
        }
      ]
    }
  },
  {
    id: 8,
    emoji: "🚀",
    title: "Becoming an Entry-Level CRA",
    subtitle: "Your Career Roadmap",
    color: "#1a1a3a",
    accent: "#8888ff",
    content: {
      intro: "Breaking into CRA is competitive but very achievable with the right steps. Most entry-level CRAs start as Clinical Research Coordinators (CRCs) at sites, or enter as Clinical Trial Assistants (CTAs) at CROs. Here is a proven roadmap.",
      sections: [
        {
          heading: "Certifications That Open Doors",
          items: [
            { term: "ACRP CCRC / CCRA", def: "Association of Clinical Research Professionals. Highly respected. CCRC = coordinator cert, CCRA = CRA cert. Requires experience OR education." },
            { term: "SoCRA CCRP", def: "Society of Clinical Research Associates. Another respected credential. Great for coordinators becoming CRAs." },
            { term: "ICH-GCP Training Certificate", def: "Free or low-cost. Foundational. Every employer expects you to have this. Get it NOW from CITI Program (citiprogram.org)." },
            { term: "Medidata Rave Training", def: "Free training available online. Knowing a major EDC platform makes you immediately more hireable." },
          ]
        },
        {
          heading: "Experience Pathways",
          items: [
            { term: "Path 1: Site Coordinator → CRA", def: "Most common path. Work 1-2 years as a CRC at a hospital or research site. Learn everything from the site's perspective. Then transition to CRO as a CRA." },
            { term: "Path 2: CTA → CRA", def: "Clinical Trial Assistant at a CRO. Administrative support role that exposes you to monitoring, TMF, and trial operations. Typically 1-2 years before promotion." },
            { term: "Path 3: Clinical Data Manager", def: "If you're data/tech-focused, data management is adjacent and often leads to monitoring roles." },
            { term: "Healthcare Background", def: "Nursing, pharmacy, biology, or health sciences degree is highly valued. Not always required but helps." },
          ]
        },
        {
          heading: "Skills to Build NOW",
          items: [
            { term: "Attention to Detail", def: "The #1 soft skill for CRAs. You are finding discrepancies others missed. Errors in clinical data can harm patients." },
            { term: "Written Communication", def: "Your IMV reports and follow-up letters must be clear, professional, and complete. Practice writing detailed summaries." },
            { term: "Time Management", def: "CRAs manage multiple sites, travel schedules, and report deadlines simultaneously. Organization is everything." },
            { term: "Relationship Building", def: "Sites that trust you perform better. Learn to be a resource, not a threat. The best CRAs are partners to their sites." },
            { term: "Regulatory Literacy", def: "Study 21 CFR Part 312, ICH-GCP E6(R2), and FDA guidance documents. Know where to find answers." },
          ]
        },
        {
          heading: "Free Resources to Start Today",
          items: [
            { term: "CITI Program", def: "citiprogram.org — GCP, Human Subjects Research, FDA-regulated research courses. Widely accepted certification." },
            { term: "FDA Website", def: "fda.gov — All regulations and guidance documents are free and public. Bookmark this." },
            { term: "ICH Website", def: "ich.org — Download ICH-GCP E6(R2) for free. Read it. Highlight it. Know it." },
            { term: "LinkedIn Learning / Coursera", def: "Clinical research fundamentals courses. Great for filling knowledge gaps." },
            { term: "ClinicalTrials.gov", def: "Search real active studies. Read actual protocols. Understanding real trials accelerates learning dramatically." },
          ]
        }
      ]
    }
  }
];

const glossaryTerms = [
  { term: "AE", def: "Adverse Event" },
  { term: "CRA", def: "Clinical Research Associate / Monitor" },
  { term: "CRC", def: "Clinical Research Coordinator" },
  { term: "CRF", def: "Case Report Form" },
  { term: "CRO", def: "Contract Research Organization" },
  { term: "EDC", def: "Electronic Data Capture" },
  { term: "eTMF", def: "Electronic Trial Master File" },
  { term: "GCP", def: "Good Clinical Practice" },
  { term: "ICF", def: "Informed Consent Form" },
  { term: "ICH", def: "International Council for Harmonisation" },
  { term: "IMP", def: "Investigational Medicinal Product (study drug)" },
  { term: "IMV", def: "Interim Monitoring Visit" },
  { term: "IND", def: "Investigational New Drug Application" },
  { term: "IRB", def: "Institutional Review Board (Ethics Committee)" },
  { term: "PI", def: "Principal Investigator (lead doctor)" },
  { term: "SAE", def: "Serious Adverse Event" },
  { term: "SDV", def: "Source Data Verification" },
  { term: "SIV", def: "Site Initiation Visit" },
  { term: "SQV", def: "Site Qualification Visit" },
  { term: "SUSAR", def: "Suspected Unexpected Serious Adverse Reaction" },
  { term: "TMF", def: "Trial Master File" },
  { term: "1572", def: "FDA Form 1572 — Investigator Agreement" },
  { term: "COV", def: "Close-Out Visit" },
  { term: "CAPA", def: "Corrective and Preventive Action" },
  { term: "DOA", def: "Delegation of Authority Log" },
  { term: "IB", def: "Investigator's Brochure" },
];

const quizData = [
  {
    q: "A subject signs the Informed Consent Form AFTER the first blood draw. What is this?",
    options: ["A minor deviation", "A major protocol deviation", "Normal practice", "An SAE"],
    correct: 1,
    explain: "Consent must ALWAYS be obtained before ANY study procedure. This is a major deviation that could compromise data integrity and, more importantly, subject rights."
  },
  {
    q: "You're reviewing an EDC and notice the subject's weight is 82 kg, but the source document says 82 lbs. What do you do?",
    options: ["Ignore it — close enough", "Generate a query in the EDC", "Call the FDA", "Delete the EDC entry"],
    correct: 1,
    explain: "Any discrepancy between source and EDC requires a query. The site must review and correct the record with proper documentation in the audit trail."
  },
  {
    q: "You finish a monitoring visit. The last thing you MUST do before leaving is:",
    options: ["Email the IMV report", "Sign the Monitor Visit Log", "Review all SAEs", "Update the TMF"],
    correct: 1,
    explain: "Always sign the Monitor Visit Log at the site. It documents that you were physically present and reviewed the study. The IMV report comes later (typically within 5-10 business days)."
  },
  {
    q: "A new nurse joins the study team but her name is NOT on the DOA Log. Can she perform study procedures?",
    options: ["Yes, if the PI verbally approves", "Yes, for minor tasks only", "No — she cannot perform any study tasks", "Only if she has GCP training"],
    correct: 2,
    explain: "The DOA Log is the authorization document. If you're not on the DOA with a specific task listed, you cannot perform that task — regardless of your general qualifications or verbal approvals."
  },
  {
    q: "An SAE is reported. What is the typical site-to-sponsor reporting timeline?",
    options: ["7 calendar days", "15 business days", "Within 24 hours", "At the next monitoring visit"],
    correct: 2,
    explain: "SAEs are typically reported to the sponsor within 24 hours of the site becoming aware. Sponsor then has reporting obligations to FDA (7 or 15 days for SUSARs)."
  },
  {
    q: "The site's IRB approval expired last week but they enrolled a new subject. This is:",
    options: ["Acceptable if renewal is in process", "A minor deviation — paperwork issue", "A major regulatory violation", "Normal — IRBs always expire"],
    correct: 2,
    explain: "Active IRB approval is REQUIRED for any study activity. Enrolling without it is a serious regulatory violation that could invalidate the subject's data and subject the PI to FDA action."
  }
];

export default function CRATraining() {
  const [activeModule, setActiveModule] = useState(null);
  const [showGlossary, setShowGlossary] = useState(false);
  const [quizMode, setQuizMode] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const handleAnswer = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === quizData[quizIndex].correct) setQuizScore(s => s + 1);
  };

  const nextQuestion = () => {
    if (quizIndex + 1 >= quizData.length) {
      setQuizDone(true);
    } else {
      setQuizIndex(i => i + 1);
      setSelected(null);
    }
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setSelected(null);
    setQuizScore(0);
    setQuizDone(false);
  };

  const currentModule = activeModule !== null ? modules[activeModule] : null;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0c14",
      color: "#e8eaf0",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      overflowX: "hidden"
    }}>

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0d1528 0%, #0a1020 50%, #0d0a1a 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "28px 32px 24px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(10px)"
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            {(activeModule !== null || showGlossary || quizMode) && (
              <button onClick={() => { setActiveModule(null); setShowGlossary(false); setQuizMode(false); resetQuiz(); }}
                style={{ background: "none", border: "none", color: "#8899cc", cursor: "pointer", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0 0 6px", display: "block", fontFamily: "inherit" }}>
                ← Back to Overview
              </button>
            )}
            <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5566aa", marginBottom: 4 }}>Clinical Research Training</div>
            <div style={{ fontSize: 22, fontWeight: "bold", color: "#c8d8ff", letterSpacing: "-0.01em" }}>
              {currentModule ? currentModule.title : showGlossary ? "Abbreviations Glossary" : quizMode ? "Knowledge Check" : "CRA Fundamentals"}
            </div>
          </div>
          {!activeModule && !showGlossary && !quizMode && (
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setShowGlossary(true)}
                style={{ background: "rgba(100,120,200,0.15)", border: "1px solid rgba(100,120,200,0.3)", color: "#aabbee", padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontFamily: "inherit", letterSpacing: "0.03em" }}>
                📖 Glossary
              </button>
              <button onClick={() => setQuizMode(true)}
                style={{ background: "rgba(200,80,80,0.15)", border: "1px solid rgba(200,80,80,0.3)", color: "#ffaaaa", padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontFamily: "inherit", letterSpacing: "0.03em" }}>
                🎯 Quiz
              </button>
            </div>
          )}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 20px" }}>

        {/* GLOSSARY */}
        {showGlossary && (
          <div>
            <p style={{ color: "#8899bb", marginBottom: 24, lineHeight: 1.6, fontSize: 15 }}>
              Clinical research runs on acronyms. Memorize these — you'll hear them daily.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
              {glossaryTerms.map((g, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 10,
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12
                }}>
                  <span style={{ fontFamily: "monospace", fontSize: 12, background: "rgba(100,140,255,0.2)", color: "#88aaff", padding: "3px 8px", borderRadius: 5, whiteSpace: "nowrap", marginTop: 1 }}>{g.term}</span>
                  <span style={{ fontSize: 13, color: "#aabbd4", lineHeight: 1.4 }}>{g.def}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* QUIZ */}
        {quizMode && !quizDone && (
          <div>
            <div style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ fontSize: 13, color: "#5566aa" }}>Question {quizIndex + 1} of {quizData.length}</div>
              <div style={{ flex: 1, height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ width: `${((quizIndex) / quizData.length) * 100}%`, height: "100%", background: "linear-gradient(90deg, #4a9eff, #ff6baa)", borderRadius: 4, transition: "width 0.4s" }} />
              </div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "28px 28px 24px", marginBottom: 20 }}>
              <div style={{ fontSize: 18, lineHeight: 1.5, color: "#d8e4ff", marginBottom: 24 }}>{quizData[quizIndex].q}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {quizData[quizIndex].options.map((opt, i) => {
                  let bg = "rgba(255,255,255,0.05)";
                  let border = "rgba(255,255,255,0.1)";
                  let col = "#b8c8e0";
                  if (selected !== null) {
                    if (i === quizData[quizIndex].correct) { bg = "rgba(74,223,134,0.15)"; border = "#4adf86"; col = "#4adf86"; }
                    else if (i === selected && selected !== quizData[quizIndex].correct) { bg = "rgba(255,80,80,0.15)"; border = "#ff6060"; col = "#ff9090"; }
                  }
                  return (
                    <button key={i} onClick={() => handleAnswer(i)}
                      style={{ background: bg, border: `1px solid ${border}`, color: col, padding: "13px 18px", borderRadius: 10, cursor: selected !== null ? "default" : "pointer", textAlign: "left", fontSize: 14, lineHeight: 1.4, fontFamily: "inherit", transition: "all 0.2s" }}>
                      <span style={{ opacity: 0.5, marginRight: 10, fontFamily: "monospace" }}>{String.fromCharCode(65 + i)}.</span>{opt}
                    </button>
                  );
                })}
              </div>
              {selected !== null && (
                <div style={{ marginTop: 20, padding: "14px 16px", background: "rgba(100,140,255,0.08)", borderRadius: 10, border: "1px solid rgba(100,140,255,0.2)" }}>
                  <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6688cc", marginBottom: 6 }}>Explanation</div>
                  <div style={{ fontSize: 14, color: "#aabbd4", lineHeight: 1.5 }}>{quizData[quizIndex].explain}</div>
                </div>
              )}
            </div>
            {selected !== null && (
              <button onClick={nextQuestion}
                style={{ background: "rgba(74,158,255,0.2)", border: "1px solid rgba(74,158,255,0.4)", color: "#4a9eff", padding: "12px 28px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontFamily: "inherit", letterSpacing: "0.04em" }}>
                {quizIndex + 1 >= quizData.length ? "See Results →" : "Next Question →"}
              </button>
            )}
          </div>
        )}

        {quizMode && quizDone && (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>{quizScore >= 5 ? "🏆" : quizScore >= 3 ? "📚" : "💪"}</div>
            <div style={{ fontSize: 42, fontWeight: "bold", color: "#c8d8ff", marginBottom: 8 }}>{quizScore}/{quizData.length}</div>
            <div style={{ fontSize: 18, color: "#8899bb", marginBottom: 8 }}>
              {quizScore === 6 ? "Excellent! You're thinking like a CRA." : quizScore >= 4 ? "Good foundation — review the modules you missed." : "Keep studying — these concepts take repetition to master."}
            </div>
            <div style={{ fontSize: 14, color: "#5566aa", marginBottom: 32 }}>
              {quizScore >= 5 ? "You have a strong grasp of monitoring fundamentals." : "Focus on the Safety and Protocol modules."}
            </div>
            <button onClick={resetQuiz}
              style={{ background: "rgba(74,158,255,0.2)", border: "1px solid rgba(74,158,255,0.4)", color: "#4a9eff", padding: "12px 28px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontFamily: "inherit" }}>
              Try Again
            </button>
          </div>
        )}

        {/* MODULE VIEW */}
        {currentModule && (
          <div>
            <div style={{ background: `linear-gradient(135deg, ${currentModule.color}88, ${currentModule.color}44)`, border: `1px solid ${currentModule.accent}33`, borderRadius: 16, padding: "28px 28px 24px", marginBottom: 28 }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>{currentModule.emoji}</div>
              <div style={{ fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: currentModule.accent, marginBottom: 6, opacity: 0.8 }}>{currentModule.subtitle}</div>
              <div style={{ fontSize: 15, color: "#b8cce4", lineHeight: 1.7 }}>{currentModule.content.intro}</div>
            </div>
            {currentModule.content.sections.map((sec, si) => (
              <div key={si} style={{ marginBottom: 20 }}>
                <button onClick={() => setExpandedSection(expandedSection === si ? null : si)}
                  style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: `1px solid ${expandedSection === si ? currentModule.accent + "66" : "rgba(255,255,255,0.1)"}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "inherit", transition: "all 0.2s" }}>
                  <span style={{ fontSize: 15, fontWeight: "bold", color: expandedSection === si ? currentModule.accent : "#c8d8ff" }}>{sec.heading}</span>
                  <span style={{ color: currentModule.accent, fontSize: 18, transition: "transform 0.2s", display: "inline-block", transform: expandedSection === si ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                </button>
                {expandedSection === si && (
                  <div style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${currentModule.accent}22`, borderTop: "none", borderRadius: "0 0 12px 12px", padding: "4px 0 8px" }}>
                    {sec.items.map((item, ii) => (
                      <div key={ii} style={{ padding: "14px 20px", borderBottom: ii < sec.items.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                        <div style={{ fontSize: 13, fontWeight: "bold", color: currentModule.accent, marginBottom: 4, letterSpacing: "0.02em" }}>{item.term}</div>
                        <div style={{ fontSize: 14, color: "#8899bb", lineHeight: 1.6 }}>{item.def}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Navigation */}
            <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
              {activeModule > 0 && (
                <button onClick={() => { setActiveModule(activeModule - 1); setExpandedSection(null); }}
                  style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#8899bb", padding: "12px", borderRadius: 10, cursor: "pointer", fontFamily: "inherit", fontSize: 13 }}>
                  ← {modules[activeModule - 1].title}
                </button>
              )}
              {activeModule < modules.length - 1 && (
                <button onClick={() => { setActiveModule(activeModule + 1); setExpandedSection(null); }}
                  style={{ flex: 1, background: `${modules[activeModule + 1].color}44`, border: `1px solid ${modules[activeModule + 1].accent}44`, color: modules[activeModule + 1].accent, padding: "12px", borderRadius: 10, cursor: "pointer", fontFamily: "inherit", fontSize: 13 }}>
                  {modules[activeModule + 1].title} →
                </button>
              )}
            </div>
          </div>
        )}

        {/* HOME — Module Grid */}
        {!activeModule && activeModule !== 0 && !showGlossary && !quizMode && (
          <div>
            {/* Whiteboard reference banner */}
            <div style={{ background: "rgba(255,200,80,0.06)", border: "1px solid rgba(255,200,80,0.2)", borderRadius: 12, padding: "16px 20px", marginBottom: 28, display: "flex", alignItems: "flex-start", gap: 14 }}>
              <span style={{ fontSize: 22 }}>📸</span>
              <div>
                <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: "#ccaa44", marginBottom: 4 }}>Based on your whiteboard</div>
                <div style={{ fontSize: 14, color: "#aa9955", lineHeight: 1.5 }}>
                  This training is built from your Monitor Visit diagram, covering all 4 pillars (TMF, Subject Source, EDC/IMP, Med Device Logs) plus the full CRA career foundation. Start at Module 1 and work through in order.
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14, marginBottom: 28 }}>
              {modules.map((mod, i) => (
                <button key={i} onClick={() => { setActiveModule(i); setExpandedSection(null); }}
                  style={{
                    background: `linear-gradient(135deg, ${mod.color}aa, ${mod.color}55)`,
                    border: `1px solid ${mod.accent}33`,
                    borderRadius: 14,
                    padding: "22px 20px",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "inherit",
                    transition: "all 0.25s",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseEnter={e => { e.currentTarget.style.border = `1px solid ${mod.accent}88`; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.border = `1px solid ${mod.accent}33`; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ fontSize: 10, fontFamily: "monospace", color: mod.accent, opacity: 0.6, marginBottom: 4 }}>MODULE {String(i + 1).padStart(2, "0")}</div>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{mod.emoji}</div>
                  <div style={{ fontSize: 16, fontWeight: "bold", color: "#d8e4ff", marginBottom: 4 }}>{mod.title}</div>
                  <div style={{ fontSize: 12, color: mod.accent, opacity: 0.7, letterSpacing: "0.06em" }}>{mod.subtitle}</div>
                </button>
              ))}
            </div>

            {/* Study Tips */}
            <div style={{ background: "rgba(100,255,200,0.04)", border: "1px solid rgba(100,255,200,0.15)", borderRadius: 14, padding: "22px 24px" }}>
              <div style={{ fontSize: 14, fontWeight: "bold", color: "#4affcc", marginBottom: 14, letterSpacing: "0.04em" }}>💡 HOW TO USE THIS TRAINING</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                {[
                  ["1. Read in order", "Modules build on each other. Start with Welcome → Protocol → TMF."],
                  ["2. Click each section", "Tap the + to expand each topic inside a module."],
                  ["3. Use the Glossary", "When you see an abbreviation, look it up. Flashcard it."],
                  ["4. Take the Quiz", "After finishing all 8 modules, test yourself. Aim for 5/6+."],
                ].map(([title, desc], i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: "12px 14px" }}>
                    <div style={{ fontSize: 13, color: "#4affcc", marginBottom: 4 }}>{title}</div>
                    <div style={{ fontSize: 12, color: "#667788", lineHeight: 1.5 }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}