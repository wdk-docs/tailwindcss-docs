import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import { Cta } from '@/components/Cta'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: '安装顺风CSS',
    body: () => (
      <p>
        安装 <code>tailwindcss</code>以及它通过NPM的对等依赖, 创建你的{' '}
        <code>tailwind.config.js</code> 文件.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init',
    },
  },
  {
    title: '将顺风添加到PostCSS配置中',
    body: () => (
      <p>
        添加 <code>tailwindcss</code> 和 <code>autoprefixer</code> 到你的{' '}
        <code>postcss.config.js</code> 文件, 或者在项目中配置PostCSS的任何地方。
      </p>
    ),
    code: {
      name: 'postcss.config.js',
      lang: 'js',
      code: `  module.exports = {
    plugins: {
>     tailwindcss: {},
>     autoprefixer: {},
    }
  }`,
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
      name: 'main.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: '开始构建过程',
    body: () => (
      <p>
        使用<code>npm Run dev</code>或在<code>package.json</code>文件中配置的任何命令运行构建过程。
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm run dev',
    },
  },
  {
    title: '开始在HTML中使用Tailwind',
    body: () => (
      <p>
        确保编译后的CSS包含在<code>{'<head>'}</code>{' '}
        <em>(您的框架可能会为您处理这个问题)</em>, 然后开始使用Tailwind的实用工具类来设计你的内容。
      </p>
    ),
    code: {
      name: 'index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/dist/main.css" rel="stylesheet">
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

export default function UsingPostCss({ code }) {
  return (
    <InstallationLayout>
      <div
        id="content-wrapper"
        className="relative z-10 max-w-3xl mb-16 prose prose-slate dark:prose-dark"
      >
        <h3 className="sr-only">安装顺风CSS作为PostCSS插件</h3>
        <p>
          安装顺风CSS作为PostCSS插件是将其与webpack, Rollup, Vite和Parcel等构建工具集成的最无缝的方式。
        </p>
      </div>
      <Steps level={4} steps={steps} code={code} />
      <Cta
        label="Explore our framework guides"
        href="/docs/installation/framework-guides"
        description={
          <>
            <strong className="font-semibold text-slate-900 dark:text-slate-200">
              Are you stuck?
            </strong>{' '}
            使用PostCSS设置顺风在不同的构建工具之间可能会有所不同。
            查看我们的框架指南，看看我们是否有针对您的特定设置的更具体的说明。
          </>
        }
      />
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

UsingPostCss.layoutProps = {
  meta: {
    title: '使用PostCSS安装顺风CSS',
    description:
      '安装顺风CSS作为PostCSS插件是将其与webpack, Rollup, Vite和Parcel等构建工具集成的最无缝的方式。',
    section: '开始',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
