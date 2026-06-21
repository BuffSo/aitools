import type { LegalDoc } from "@/content/legal";

// 약관 본문 렌더러 (정적 텍스트 — 서버 컴포넌트)
export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-brand-ink/70">시행일: {doc.effectiveDate}</p>
        <p className="mt-4 leading-relaxed text-brand-ink/80">{doc.intro}</p>

        <div className="mt-10 space-y-10">
          {doc.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold text-brand-ink">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((block, i) =>
                  block.type === "p" ? (
                    <p
                      key={i}
                      className="text-sm leading-relaxed text-brand-ink/80"
                    >
                      {block.text}
                    </p>
                  ) : (
                    <ul
                      key={i}
                      className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-brand-ink/80 marker:text-brand/50"
                    >
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
