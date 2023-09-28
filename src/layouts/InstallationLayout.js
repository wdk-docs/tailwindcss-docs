import { BasicLayout } from '@/layouts/BasicLayout'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { IconContainer } from '@/components/home/common'

let tabs = {
  'Tailwind CLI': '/docs/installation',
  '使用PostCSS': '/docs/installation/using-postcss',
  '框架指南': '/docs/installation/framework-guides',
  '使用CDN': '/docs/installation/play-cdn',
}

let readNext = [
  {
    title: '实用第一基础',
    href: '/docs/utility-first',
    body: () => (
      <p>
        使用实用程序优先工作流从一组受约束的基本实用程序构建复杂组件。
      </p>
    ),
    icon: {
      className: 'dark:bg-indigo-500 dark:highlight-white/20',
      light: require('@/img/icons/home/utility-first.png').default.src,
      dark: require('@/img/icons/home/dark/utility-first.png').default.src,
    },
  },
  {
    title: '响应设计',
    href: '/docs/responsive-design',
    body: () => (
      <p>
        使用响应式修饰符构建完全响应式的用户界面，以适应任何屏幕尺寸。
      </p>
    ),
    icon: {
      className: 'dark:bg-indigo-500 dark:highlight-white/20',
      light: require('@/img/icons/home/mobile-first.png').default.src,
      dark: require('@/img/icons/home/dark/mobile-first.png').default.src,
    },
  },
  {
    title: '悬停，焦点和其他状态',
    href: '/docs/hover-focus-and-other-states',
    body: () => (
      <p>
        使用条件修饰语对悬停、聚焦等交互状态中的元素进行样式化。
      </p>
    ),
    icon: {
      className: 'dark:bg-blue-500 dark:highlight-white/20',
      light: require('@/img/icons/home/state-variants.png').default.src,
      dark: require('@/img/icons/home/dark/state-variants.png').default.src,
    },
  },
  {
    title: '黑暗模式',
    href: '/docs/dark-mode',
    body: () => (
      <p>使用暗模式修改器直接在HTML中优化网站的暗模式。</p>
    ),
    icon: {
      className: 'dark:bg-slate-600 dark:highlight-white/20',
      light: require('@/img/icons/home/dark-mode.png').default.src,
      dark: require('@/img/icons/home/dark/dark-mode.png').default.src,
    },
  },
  {
    title: '重用风格',
    href: '/docs/reusing-styles',
    body: () => (
      <p>
        通过创建可重用的抽象来管理复制并保持项目的可维护性。
      </p>
    ),
    icon: {
      className: 'dark:bg-sky-500 dark:highlight-white/20',
      light: require('@/img/icons/home/component-driven.png').default.src,
      dark: require('@/img/icons/home/dark/component-driven.png').default.src,
    },
  },
  {
    title: '定制框架',
    href: '/docs/adding-custom-styles',
    body: () => (
      <p>自定义框架以匹配您的品牌，并使用您自己的自定义样式扩展它。</p>
    ),
    icon: {
      className: 'dark:bg-pink-500 dark:highlight-white/30',
      light: require('@/img/icons/home/customization.png').default.src,
      dark: require('@/img/icons/home/dark/customization.png').default.src,
    },
  },
]

export function InstallationLayout({ children }) {
  let router = useRouter()

  return (
    <BasicLayout>
      <header id="header" className="mb-10 md:flex md:items-start">
        <div className="flex-auto max-w-4xl">
          <p className="mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
            安装
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
            开始学习顺风CSS
          </h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-400">
            顺风CSS的工作原理是扫描所有HTML文件、JavaScript组件和任何其他模板中的类名，生成相应的样式，然后将它们写入静态CSS文件。
          </p>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-400">
            它快速、灵活、可靠——运行时间为零。
          </p>
        </div>
      </header>
      <section className="mb-16 relative">
        <div className="relative z-10">
          <h2
            data-docsearch-ignore
            className="text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200"
          >
            安装
          </h2>
          <div className="flex overflow-auto mb-6 -mx-4 sm:-mx-6">
            <div className="flex-none min-w-full px-4 sm:px-6">
              <ul className="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5 mb-px">
                {Object.entries(tabs).map(([name, href]) => (
                  <li key={name}>
                    <h2>
                      <Link
                        href={href}
                        scroll={false}
                        className={clsx(
                          'flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px',
                          href === router.pathname
                            ? 'text-sky-500 border-current'
                            : 'text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700'
                        )}
                      >
                        {name}
                      </Link>
                    </h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {children}
      </section>

      <section className="relative">
        <h2 className="text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200">
          接下来读什么?
        </h2>
        <div className="mb-10 max-w-2xl prose prose-slate xl:mb-0 dark:prose-dark">
          <p>
            熟悉一些使顺风CSS与编写传统CSS不同的核心概念。
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-x-16 gap-y-8 xl:grid-cols-2 xl:gap-y-10">
          {readNext.map((item) => (
            <li key={item.title} className="relative flex items-start">
              <IconContainer
                className={clsx('flex-none', item.icon.className)}
                light={item.icon.light}
                dark={item.icon.dark}
              />
              <div className="peer group flex-auto ml-6">
                <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
                  <Link
                    href={item.href}
                    className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4"
                  >
                    {item.title}
                    <svg
                      viewBox="0 0 3 6"
                      className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                    >
                      <path
                        d="M0 0L3 3L0 6"
                        fill="none"
                        strokeWidth="2"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </h3>
                <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                  <item.body />
                </div>
              </div>
              <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4" />
            </li>
          ))}
        </ul>
      </section>
    </BasicLayout>
  )
}
