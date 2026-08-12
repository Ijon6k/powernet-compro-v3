import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="prose prose-neutral max-w-none text-[#262626] font-inter-tight">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl sm:text-4xl font-semibold text-[#262626] font-inter-tight tracking-tight mt-12 mb-6 leading-tight">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#262626] font-inter-tight tracking-tight mt-12 mb-4 pb-2 border-b border-[#E5E5E5] leading-snug">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl sm:text-2xl font-semibold text-[#262626] font-inter-tight tracking-tight mt-8 mb-3 leading-snug">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-lg font-semibold text-[#262626] font-inter-tight mt-6 mb-2">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-base sm:text-lg text-[#262626] font-normal font-inter-tight leading-[1.8] my-6">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="my-6 pl-6 space-y-2.5 list-disc marker:text-[#C02026] text-base sm:text-lg text-[#262626]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-6 pl-6 space-y-2.5 list-decimal marker:text-[#C02026] text-base sm:text-lg text-[#262626]">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="pl-1 leading-relaxed text-[#262626]">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-8 pl-6 py-1 border-l-2 border-[#C02026] text-lg sm:text-xl text-[#404040] font-inter-tight leading-relaxed font-normal">
              {children}
            </blockquote>
          ),
          code: ({ className, children, ...props }) => {
            const isInline = !className && !String(children).includes("\n");
            if (isInline) {
              return (
                <code
                  className="bg-[#F5F5F5] text-[#262626] font-mono text-sm px-1.5 py-0.5 rounded border border-[#E5E5E5]"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <pre className="my-8 p-5 bg-[#171717] text-[#EDEDED] font-mono text-sm rounded-lg overflow-x-auto leading-relaxed">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            );
          },
          table: ({ children }) => (
            <div className="my-8 overflow-x-auto border-t border-b border-[#E5E5E5]">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-[#FAF9F9] border-b border-[#E5E5E5] text-[#262626] font-semibold">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-[#E5E5E5]">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-[#FAF9F9]/60 transition-colors">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 font-semibold text-[#262626] font-inter-tight">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-[#262626] font-inter-tight">
              {children}
            </td>
          ),
          hr: () => <hr className="my-10 border-t border-[#E5E5E5]" />,
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-[#C02026] font-medium underline underline-offset-4 hover:text-[#B82E59] transition-colors"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-[#262626]">{children}</strong>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
