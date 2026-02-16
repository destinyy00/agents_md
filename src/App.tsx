import { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  BLUEPRINT_DATA,
  BLUEPRINT_KEYS,
  CATEGORY_DETAILS,
  DELIVERY_PROFILES,
  KEYWORD_CATEGORY_MAP,
  UX_PROFILES,
  type BlueprintKey,
  type DeliveryProfile,
  type StackOption,
  type UxProfile
} from "./data";

type ClipboardState = "idle" | "copied" | "failed";
type WizardStep = 1 | 2 | 3 | 4 | 5;

const tokenize = (value: string): string[] =>
  value
    .toLowerCase()
    .split(/[^a-z0-9]+/g)
    .filter(Boolean);

const scoreCategory = (key: BlueprintKey, query: string, tokens: string[]): number => {
  const category = BLUEPRINT_DATA[key];
  const details = CATEGORY_DETAILS[key];
  const haystack = `${key} ${category.title} ${category.source_inspiration} ${details.summary}`.toLowerCase();
  let score = 0;

  if (!query) {
    return 1;
  }

  for (const token of tokens) {
    if (haystack.includes(token)) {
      score += 1;
    }

    const mapped = KEYWORD_CATEGORY_MAP[token];
    if (mapped?.includes(key)) {
      score += 5;
    }
  }

  for (const [phrase, mappedKeys] of Object.entries(KEYWORD_CATEGORY_MAP)) {
    if (query.includes(phrase) && mappedKeys.includes(key)) {
      score += 8;
    }
  }

  return score;
};

const formatFilename = (projectName: string, category: string): string => {
  const safeName = `${projectName || "project"}_${category}`
    .replace(/\s+/g, "_")
    .replace(/[^a-zA-Z0-9_-]/g, "");
  return `${safeName}_BLUEPRINT.md`;
};

const getStep = (
  category: BlueprintKey | null,
  stack: StackOption | undefined,
  delivery: DeliveryProfile | undefined,
  ux: UxProfile | undefined
): WizardStep => {
  if (!category) {
    return 1;
  }
  if (!stack) {
    return 2;
  }
  if (!delivery) {
    return 3;
  }
  if (!ux) {
    return 4;
  }
  return 5;
};

const buildMarkdown = (params: {
  category: BlueprintKey;
  stack: StackOption;
  delivery: DeliveryProfile;
  ux: UxProfile;
  projectName: string;
  productGoal: string;
  targetUsers: string;
}): string => {
  const { category, stack, delivery, ux, projectName, productGoal, targetUsers } = params;
  const blueprint = BLUEPRINT_DATA[category];
  const detail = CATEGORY_DETAILS[category];

  const modules = detail.feature_modules.map((module, index) => `${index + 1}. ${module}`).join("\n");
  const screens = detail.ux_screen_starter_pack.map((screen) => `- ${screen}`).join("\n");
  const architectureFocus = detail.architecture_focus.map((item) => `- ${item}`).join("\n");
  const qualityGates = delivery.quality_gates.map((item) => `- ${item}`).join("\n");

  return `# ${projectName} - Implementation Blueprint
## 1. Product Brief
- **Project Name:** ${projectName}
- **Category:** ${blueprint.title}
- **Target Users:** ${targetUsers}
- **Primary Goal:** ${productGoal}
- **Delivery Profile:** ${delivery.title}

## 2. Chosen Stack
- **Stack Option:** ${stack.name}
- **Frontend:** ${stack.frontend}
- **Backend:** ${stack.backend}
- **Database:** ${stack.database}
- **Infrastructure:** ${stack.infra}
- **Auth:** ${stack.auth}
- **Testing:** ${stack.testing}

## 3. Architecture Scope
${architectureFocus}

### 3.1 Team & Execution Plan
- **Timeline Strategy:** ${delivery.timeline}
- **Recommended Team Shape:** ${delivery.team_shape}

### 3.2 Quality Gates
${qualityGates}

## 4. Feature Module Plan
${modules}

## 5. UI_UX_MASTER_SPEC.md
### 5.1 Design Direction (Non-Generic)
- **UX Profile:** ${ux.title}
- **Product Voice:** ${ux.voice}
- **Layout Principle:** ${ux.layout_principle}
- **Motion Principle:** ${ux.motion_principle}
- **Typography Stack:** ${ux.typography}

### 5.2 Visual Tokens
- **Primary:** ${ux.color_tokens.primary}
- **Accent:** ${ux.color_tokens.accent}
- **Background:** ${ux.color_tokens.background}
- **Panel:** ${ux.color_tokens.panel}
- **Text:** ${ux.color_tokens.text}

### 5.3 Screen Inventory
${screens}

### 5.4 Interaction Rules
- Use progressive disclosure for complex forms and settings.
- Keep one primary call-to-action per major surface.
- Use clear loading, empty, success, and error states on every critical screen.
- All data tables must support search, filter, and keyboard navigation.

### 5.5 Accessibility Requirements
- Target AAA contrast for core text/background pairs.
- Full keyboard navigation support for primary workflows.
- Focus ring must be clearly visible on every interactive element.
- Form inputs require labels, helper text, and field-specific errors.

### 5.6 UX Anti-Slop Guardrails
- Avoid generic SaaS hero patterns and placeholder copy.
- Every screen must have a clear job-to-be-done and success state.
- Use domain-specific labels (not generic "item", "thing", "data").
- Prefer compact, information-rich layouts for expert workflows.

## 6. Engineering Delivery Checklist
- Baseline observability (structured logs, traces, RED metrics).
- Secure defaults (HTTP-only cookies or token vaulting, strict CORS/CSP).
- CI pipeline with unit tests, integration tests, and E2E coverage for critical paths.
- Release and rollback playbook documented before first production deploy.

## 7. Base Category Reference
${blueprint.content}
`;
};

function App() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<BlueprintKey | null>(null);
  const [selectedStackId, setSelectedStackId] = useState<string | null>(null);
  const [selectedDeliveryId, setSelectedDeliveryId] = useState<DeliveryProfile["id"] | null>(null);
  const [selectedUxId, setSelectedUxId] = useState<UxProfile["id"] | null>(null);
  const [projectName, setProjectName] = useState("My Project");
  const [productGoal, setProductGoal] = useState("Define clear product outcomes and architecture before implementation.");
  const [targetUsers, setTargetUsers] = useState("Product managers, engineers, and operators.");
  const [clipboardState, setClipboardState] = useState<ClipboardState>("idle");

  const filteredCategories = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const tokens = tokenize(normalized);

    return [...BLUEPRINT_KEYS]
      .map((key) => ({ key, score: scoreCategory(key, normalized, tokens) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || BLUEPRINT_DATA[a.key].title.localeCompare(BLUEPRINT_DATA[b.key].title))
      .map((item) => item.key);
  }, [query]);

  const categoryDetail = selectedCategory ? CATEGORY_DETAILS[selectedCategory] : undefined;
  const selectedStack = categoryDetail?.stack_options.find((stack) => stack.id === selectedStackId);
  const selectedDelivery = DELIVERY_PROFILES.find((profile) => profile.id === selectedDeliveryId);
  const selectedUx = UX_PROFILES.find((profile) => profile.id === selectedUxId);
  const step = getStep(selectedCategory, selectedStack, selectedDelivery, selectedUx);
  const hasCategorySearch = query.trim().length > 0;

  const generatedMarkdown = useMemo(() => {
    if (!(selectedCategory && selectedStack && selectedDelivery && selectedUx)) {
      return "";
    }

    return buildMarkdown({
      category: selectedCategory,
      stack: selectedStack,
      delivery: selectedDelivery,
      ux: selectedUx,
      projectName,
      productGoal,
      targetUsers
    });
  }, [selectedCategory, selectedStack, selectedDelivery, selectedUx, projectName, productGoal, targetUsers]);

  const goBack = (): void => {
    if (step === 5) {
      setSelectedUxId(null);
      return;
    }
    if (selectedUxId) {
      setSelectedUxId(null);
      return;
    }
    if (selectedDeliveryId) {
      setSelectedDeliveryId(null);
      return;
    }
    if (selectedStackId) {
      setSelectedStackId(null);
      return;
    }
    if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  const resetAll = (): void => {
    setSelectedCategory(null);
    setSelectedStackId(null);
    setSelectedDeliveryId(null);
    setSelectedUxId(null);
    setQuery("");
  };

  const handleDownload = (): void => {
    if (!(selectedCategory && generatedMarkdown)) {
      return;
    }

    const blob = new Blob([generatedMarkdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = formatFilename(projectName, selectedCategory);
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  };

  const handleCopy = async (): Promise<void> => {
    if (!generatedMarkdown) {
      return;
    }

    try {
      await navigator.clipboard.writeText(generatedMarkdown);
      setClipboardState("copied");
      setTimeout(() => setClipboardState("idle"), 1100);
    } catch {
      setClipboardState("failed");
      setTimeout(() => setClipboardState("idle"), 1600);
    }
  };

  return (
    <main className="app-shell container-xxl">
      {step > 1 && (
        <header className="topbar" role="banner">
          <div>
            <h1>Blueprint Registry</h1>
            <p>Select project options first. Your markdown is generated at the final step.</p>
          </div>
          <div className="topbar-actions">
            <button type="button" onClick={goBack} disabled={step === 1}>
              Back
            </button>
            <button type="button" onClick={resetAll}>
              Reset
            </button>
          </div>
        </header>
      )}

      <nav className="stepper" aria-label="Progress">
        <div className={step >= 1 ? "step active" : "step"}>1. Category</div>
        <div className={step >= 2 ? "step active" : "step"}>2. Stack</div>
        <div className={step >= 3 ? "step active" : "step"}>3. Delivery</div>
        <div className={step >= 4 ? "step active" : "step"}>4. UI/UX</div>
        <div className={step >= 5 ? "step active" : "step"}>5. Result</div>
      </nav>
      <p className="responsive-note">Mobile responsive: optimized for phone, tablet, and desktop.</p>

      <section className="wizard" aria-live="polite">
        <aside className="control-panel">
          {step > 1 && (
            <div className="fields">
              <label htmlFor="projectName">Project Name</label>
              <input id="projectName" value={projectName} onChange={(e) => setProjectName(e.target.value)} />

              <label htmlFor="targetUsers">Target Users</label>
              <input id="targetUsers" value={targetUsers} onChange={(e) => setTargetUsers(e.target.value)} />

              <label htmlFor="productGoal">Primary Goal</label>
              <textarea id="productGoal" value={productGoal} onChange={(e) => setProductGoal(e.target.value)} rows={3} />
            </div>
          )}

          {step === 1 && (
            <section>
              <h2>Choose Category</h2>
              <p>Start with the product type.</p>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search category: web, ios, desktop, blockchain..."
                aria-label="Search categories"
              />
              {!hasCategorySearch && <p className="search-gate">Start typing to reveal matching categories.</p>}
              {hasCategorySearch && (
                <div className="option-list">
                  {filteredCategories.length === 0 && <p className="search-gate">No category matched this search.</p>}
                  {filteredCategories.map((key, idx) => {
                    const category = BLUEPRINT_DATA[key];
                    const detail = CATEGORY_DETAILS[key];
                    return (
                      <button
                        key={key}
                        className="option-card"
                        style={{ animationDelay: `${idx * 35}ms` }}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(key);
                          setSelectedStackId(null);
                          setSelectedDeliveryId(null);
                          setSelectedUxId(null);
                        }}
                      >
                        <strong>{category.title}</strong>
                        <span>{detail.summary}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </section>
          )}

          {step === 2 && categoryDetail && (
            <section>
              <h2>Choose Stack</h2>
              <p>{categoryDetail.summary}</p>
              <div className="option-list">
                {categoryDetail.stack_options.map((stack, idx) => (
                  <button
                    key={stack.id}
                    className="option-card"
                    style={{ animationDelay: `${idx * 45}ms` }}
                    type="button"
                    onClick={() => setSelectedStackId(stack.id)}
                  >
                    <strong>{stack.name}</strong>
                    <span>{stack.frontend}</span>
                    <span>{stack.backend}</span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {step === 3 && (
            <section>
              <h2>Choose Delivery Profile</h2>
              <p>Set scope, timeline, and quality expectations.</p>
              <div className="option-list">
                {DELIVERY_PROFILES.map((profile, idx) => (
                  <button
                    key={profile.id}
                    className="option-card"
                    style={{ animationDelay: `${idx * 60}ms` }}
                    type="button"
                    onClick={() => setSelectedDeliveryId(profile.id)}
                  >
                    <strong>{profile.title}</strong>
                    <span>{profile.timeline}</span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {step === 4 && (
            <section>
              <h2>Choose UI/UX Direction</h2>
              <p>Pick the design behavior and tone for UI_UX_MASTER_SPEC.</p>
              <div className="option-list">
                {UX_PROFILES.map((profile, idx) => (
                  <button
                    key={profile.id}
                    className="option-card"
                    style={{ animationDelay: `${idx * 60}ms` }}
                    type="button"
                    onClick={() => setSelectedUxId(profile.id)}
                  >
                    <strong>{profile.title}</strong>
                    <span>{profile.voice}</span>
                    <span>{profile.layout_principle}</span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {step === 5 && (
            <section>
              <h2>Result Ready</h2>
              <p>Copy or download your full project markdown blueprint.</p>
              <div className="action-row">
                <button type="button" onClick={handleDownload}>
                  Download .md
                </button>
                <button type="button" onClick={handleCopy}>
                  Copy to Clipboard
                </button>
              </div>
              <div className="clipboard-status" aria-live="polite">
                {clipboardState === "copied" && "Blueprint copied."}
                {clipboardState === "failed" && "Clipboard write failed."}
              </div>
            </section>
          )}
        </aside>

        {step === 5 && (
          <article className="preview-panel">
            <h2>Generated Markdown</h2>
            <div className="markdown-viewer">
              <ReactMarkdown>{generatedMarkdown}</ReactMarkdown>
            </div>
          </article>
        )}
      </section>
    </main>
  );
}

export default App;
