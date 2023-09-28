import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: '创建您的项目',
    body: () => (
      <p>
        如果你还没有创建一个新的Next.js项目，那就从创建一个开始吧。
        最常见的方法是使用{' '}
        <a href="https://nextjs.org/docs/api-reference/create-next-app">Create Next App</a>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx create-next-app@latest my-project --typescript --eslint\ncd my-project',
    },
  },
  {
    title: '安装顺风CSS',
    body: () => (
      <p>
        通过npm安装<code>tailwindcss</code>及其对等依赖项，然后运行init命令生成<code>tailwind.config.js</code>和<code>postcss.config.js</code>。
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p',
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
>   content: [
>     "./app/**/*.{js,ts,jsx,tsx,mdx}",
>     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
>     "./components/**/*.{js,ts,jsx,tsx,mdx}",
>
>     // Or if using \`src\` directory:
>     "./src/**/*.{js,ts,jsx,tsx,mdx}",
>   ],
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
        为每个Tailwind的层添加<code>@tailwind</code>指令到{' '}
        <code>globals.css</code> 文件.
      </p>
    ),
    code: {
      name: 'globals.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: '开始构建过程',
    body: () => (
      <p>
        使用<code>npm Run dev</code>运行构建过程。
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm run dev',
    },
  },
  {
    title: '开始在你的项目中使用Tailwind',
    body: () => <p>开始使用Tailwind的实用工具类来样式化您的内容。</p>,
    code: {
      name: 'index.tsx',
      lang: 'jsx',
      code: `  export default function Home() {
    return (
>     <h1 className="text-3xl font-bold underline">
>       Hello world!
>     </h1>
    )
  }`,
    },
  },
]

export default function UsingNextJs({ code }) {
  return (
    <FrameworkGuideLayout
      title="用Next.js安装顺风CSS"
      description="在Next.js项目中设置顺风CSS。"
    >
      <Steps steps={steps} code={code} />
    </FrameworkGuideLayout>
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

UsingNextJs.layoutProps = {
  meta: {
    title: '用Next.js安装顺风CSS',
    description: '在Next.js v10+项目中设置顺风CSS。',
    section: '安装',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
