import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function MarkdownRenderer({
  markdown = "",
}: {
  markdown: string;
}) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: (props: React.ComponentProps<"h1">) => (
          <h1 className="text-3xl font-bold mt-4 mb-2" {...props} />
        ),
        h2: (props: React.ComponentProps<"h2">) => (
          <h2 className="text-2xl font-bold mt-4 mb-2" {...props} />
        ),
        h3: (props: React.ComponentProps<"h3">) => (
          <h3 className="text-xl font-bold mt-3 mb-2" {...props} />
        ),
        p: (props: React.ComponentProps<"p">) => (
          <p className="mb-2" {...props} />
        ),
        ul: (props: React.ComponentProps<"ul">) => (
          <ul className="list-disc list-inside ml-4" {...props} />
        ),
        ol: (props: React.ComponentProps<"ol">) => (
          <ol className="list-decimal list-inside ml-4" {...props} />
        ),
        li: (props: React.ComponentProps<"li">) => (
          <li className="mb-1" {...props} />
        ),
        blockquote: (props: React.ComponentProps<"blockquote">) => (
          <blockquote
            className="border-l-4 border-gray-400 pl-4 italic"
            {...props}
          />
        ),
        code: (props: React.ComponentProps<"code">) => (
          <code className="bg-gray-200 px-1 py-0.5 rounded" {...props} />
        ),
        hr: (props: React.ComponentProps<"hr">) => (
          <hr className="my-4" {...props} />
        ),
        a: (props: React.ComponentProps<"a">) => (
          <a
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
        table: (props: React.ComponentProps<"table">) => (
          <table className="table-auto w-full" {...props} />
        ),
        thead: (props: React.ComponentProps<"thead">) => (
          <thead className="bg-gray-100" {...props} />
        ),
        th: (props: React.ComponentProps<"th">) => (
          <th className="border px-4 py-2" {...props} />
        ),
        tbody: (props: React.ComponentProps<"tbody">) => <tbody {...props} />,
        tr: (props: React.ComponentProps<"tr">) => (
          <tr className="bg-gray-50" {...props} />
        ),
        td: (props: React.ComponentProps<"td">) => (
          <td className="border px-4 py-2" {...props} />
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}
