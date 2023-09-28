import { Steps } from '@/components/Steps'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import Link from 'next/link'

let steps = [
  {
    title: '安装 Tailwind CSS',
    body: () => (
      <p>
        通过 npm 安装 <code>tailwindcss</code> , 创建你的 <code>tailwind.config.js</code>{' '}
        文件.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss\nnpx tailwindcss init',
    },
  },
  {
    title: '配置模板路径',
    body: () => (
      <p>
        将路径添加到<code>tailwind.config.js</code>文件中的所有模板文件中。
      </p>
    ),
    code: {
      name: 'tailwind.config.js',
      lang: 'js',
      code: `  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }`,
    },
  },
  {
    title: '将顺风指令添加到CSS中',
    body: () => (
      <p>
        为每个Tailwind层添加<code>@tailwind</code>指令到你的主CSS文件中。
      </p>
    ),
    code: {
      name: 'src/input.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: '启动Tailwind CLI构建过程',
    body: () => <p>运行CLI工具扫描模板文件中的类并构建CSS。</p>,
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch',
    },
  },
  {
    title: '开始在HTML中使用Tailwind',
    body: () => (
      <p>
        将编译后的CSS文件添加到<code>{'<head>'}</code>中，并开始使用Tailwind的实用程序类来样式化您的内容。
      </p>
    ),
    code: {
      name: 'src/index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <link href="/dist/output.css" rel="stylesheet">
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </body>
  </html>`,
    },
  },
]

export default function TailwindCli({ code }) {
  return (
    <InstallationLayout>
      <div
        id="content-wrapper"
        className="relative z-10 max-w-3xl mb-16 prose prose-slate dark:prose-dark"
      >
        <h3 className="sr-only">安装顺风命令行</h3>
        <p>
          从头开始使用顺风CSS的最简单和最快的方法是使用顺风CLI工具。
          CLI也可以作为{' '}
          <Link href="/blog/standalone-cli">独立的可执行文件</Link> 如果你想使用它而不安装Node.js。
        </p>
      </div>
      <Steps level={4} steps={steps} code={code} />
      {/*
        <Cta
          label="Read the documentation"
          href="/docs/tailwind-cli"
          description={
            <>
              <strong className="font-semibold text-slate-900">
                This is only the beginning of what’s possible with the Tailwind CLI.
              </strong>{' '}
              To learn more about everything it can do, check out the Tailwind CLI documentation.
            </>
          }
        />
      */}
    </InstallationLayout>
  )
}

export function getStaticProps() {
  let { highlightedCodeSnippets } = require('@/components/Guides/Snippets.js')

  return {
    props: {
      code: highlightedCodeSnippets(steps),
    },
  }
}

TailwindCli.layoutProps = {
  meta: {
    title: '安装',
    description:
      '从头开始使用顺风CSS的最简单和最快的方法是使用顺风CLI工具。',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
