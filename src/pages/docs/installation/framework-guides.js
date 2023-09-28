import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import Link from 'next/link'

import { ReactComponent as AstroLogo } from '@/img/guides/astro.svg'
import { ReactComponent as AstroLogoWhite } from '@/img/guides/astro-white.svg'
import { ReactComponent as AdonisLogo } from '@/img/guides/adonis.svg'
import { ReactComponent as AngularLogo } from '@/img/guides/angular.svg'
import { ReactComponent as AngularLogoWhite } from '@/img/guides/angular-white.svg'
import { ReactComponent as CraLogo } from '@/img/guides/cra.svg'
import { ReactComponent as EmberLogo } from '@/img/guides/ember.svg'
import { ReactComponent as GatsbyLogo } from '@/img/guides/gatsby.svg'
import { ReactComponent as LaravelLogo } from '@/img/guides/laravel.svg'
import { ReactComponent as MeteorLogo } from '@/img/guides/meteor.svg'
import { ReactComponent as NextJsLogo } from '@/img/guides/nextjs.svg'
import { ReactComponent as NextJsLogoWhite } from '@/img/guides/nextjs-white.svg'
import { ReactComponent as NuxtJsLogo } from '@/img/guides/nuxtjs.svg'
import { ReactComponent as ParcelLogo } from '@/img/guides/parcel.svg'
import { ReactComponent as PhoenixLogo } from '@/img/guides/phoenix.svg'
import { ReactComponent as QwikLogo } from '@/img/guides/qwik.svg'
import { ReactComponent as RailsLogo } from '@/img/guides/rails.svg'
import { ReactComponent as RailsLogoWhite } from '@/img/guides/rails-white.svg'
import { ReactComponent as RemixLogo } from '@/img/guides/remix.svg'
import { ReactComponent as RemixLogoWhite } from '@/img/guides/remix-white.svg'
import { ReactComponent as SolidJSLogo } from '@/img/guides/solidjs.svg'
import { ReactComponent as SvelteLogo } from '@/img/guides/svelte.svg'
import { ReactComponent as SymfonyLogo } from '@/img/guides/symfony.svg'
import { ReactComponent as SymfonyLogoWhite } from '@/img/guides/symfony-white.svg'
import { ReactComponent as ViteLogo } from '@/img/guides/vite.svg'

export default function FrameworkGuides() {
  return (
    <InstallationLayout>
      <div id="content-wrapper" className="prose prose-slate mb-10 max-w-3xl dark:prose-dark">
        <h3 className="sr-only">框架指南</h3>
        <p>
          特定于框架的指南涵盖了我们推荐的在许多流行环境中安装顺风CSS的方法。
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
        {[
          {
            name: 'Next.js',
            slug: 'nextjs',
            description: '全功能的React框架，具有丰富的开发经验。',
            logo: NextJsLogo,
            logoDark: NextJsLogoWhite,
          },
          {
            name: 'Laravel',
            slug: 'laravel',
            description: 'PHP web应用程序框架，具有表现力，优雅的语法。',
            logo: LaravelLogo,
          },
          {
            name: 'Vite',
            slug: 'vite',
            description: '快速和现代的开发服务器和构建工具。',
            logo: ViteLogo,
          },
          {
            name: 'Nuxt',
            slug: 'nuxtjs',
            description: '直观的Vue框架，用于构建通用应用程序。',
            logo: NuxtJsLogo,
          },
          {
            name: 'Gatsby',
            slug: 'gatsby',
            description: '使用React和GraphQL构建静态站点的框架。',
            logo: GatsbyLogo,
          },
          {
            name: 'SolidJS',
            slug: 'solidjs',
            description: '一个用于构建简单、高性能和反应性用户界面的工具。',
            logo: SolidJSLogo,
          },
          {
            name: 'SvelteKit',
            slug: 'sveltekit',
            description: '使用Svelte.js构建各种大小应用程序的最快方法。',
            logo: SvelteLogo,
          },
          {
            name: 'Angular',
            slug: 'angular',
            description: '用于构建移动和桌面web应用程序的平台。',
            logo: AngularLogo,
            logoDark: AngularLogoWhite,
          },
          {
            name: 'Ruby on Rails',
            slug: 'ruby-on-rails',
            description:
              '全栈框架，包含构建令人惊叹的web应用程序所需的所有工具。',
            logo: RailsLogo,
            logoDark: RailsLogoWhite,
          },
          {
            name: 'Remix',
            slug: 'remix',
            description: '全栈框架专注于web基础和现代用户体验。',
            logo: RemixLogo,
            logoDark: RemixLogoWhite,
          },
          {
            name: 'Phoenix',
            slug: 'phoenix',
            description: '一个用Elixir构建丰富的交互式应用程序的框架。',
            logo: PhoenixLogo,
          },
          {
            name: 'Parcel',
            slug: 'parcel',
            description: 'web的零配置构建工具。',
            logo: ParcelLogo,
          },
          {
            name: 'Symfony',
            slug: 'symfony',
            description: '一个PHP框架，用于创建网站和web应用程序。',
            logo: SymfonyLogo,
            logoDark: SymfonyLogoWhite,
          },
          {
            name: 'Meteor',
            slug: 'meteor',
            description: '用于开发跨平台应用程序的全栈JavaScript框架。',
            logo: MeteorLogo,
          },
          {
            name: 'Create React App',
            slug: 'create-react-app',
            description: '用于搭建新的单页React应用程序的CLI工具。',
            logo: CraLogo,
          },
          {
            name: 'AdonisJS',
            slug: 'adonisjs',
            description: '一个全功能的Node.js web框架。',
            logo: AdonisLogo,
          },
          {
            name: 'Ember.js',
            slug: 'emberjs',
            description: '一个面向雄心勃勃的web开发人员的JavaScript框架。',
            logo: EmberLogo,
          },
          {
            name: 'Astro',
            slug: 'astro',
            description: '为速度而设计的一体化web框架。',
            logo: AstroLogo,
            logoDark: AstroLogoWhite,
          },
          {
            name: 'Qwik',
            slug: 'qwik',
            description: '毫不费力地构建即时交互的web应用程序。',
            logo: QwikLogo,
          },
        ].map(({ name, description, logo: Logo, logoDark: LogoDark, slug }) => (
          <li key={name} className="relative flex flex-row-reverse">
            <div className="peer group ml-6 flex-auto">
              <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                <Link
                  href={`/docs/guides/${slug}`}
                  className="before:absolute before:-inset-3 before:rounded-2xl"
                >
                  {name}
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
              </h4>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">{description}</p>
            </div>
            <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
              {LogoDark !== undefined ? (
                <>
                  <Logo className="block dark:hidden" />
                  <LogoDark className="hidden dark:block" />
                </>
              ) : (
                <Logo className="dark:block" />
              )}
            </div>
            <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100" />
          </li>
        ))}
      </ul>
      <div className="mt-16 prose prose-slate max-w-3xl dark:prose-dark">
        <p>
          没有看到您选择的框架?试着用{' '}
          <Link href="/docs/installation">Tailwind CLI</Link> 或安装 Tailwind{' '}
          <Link href="/docs/installation/using-postcss">作为PostCSS插件</Link>。
        </p>
      </div>
    </InstallationLayout>
  )
}

FrameworkGuides.layoutProps = {
  meta: {
    title: 'Framework Guides',
    description:
      '特定于框架的指南涵盖了我们推荐的在许多流行环境中安装顺风CSS的方法。',
    section: '开始',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
