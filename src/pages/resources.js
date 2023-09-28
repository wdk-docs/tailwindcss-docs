import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { Button } from '@/components/Button'
import clsx from 'clsx'
import { BasicLayout } from '@/layouts/BasicLayout'
import { ReactComponent as DiscordIcon } from '@/img/icons/discord.svg'
import { ReactComponent as GitHubIcon } from '@/img/icons/github.svg'

function CardGroup({ children, className }) {
  return (
    <ul className={clsx('grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start', className)}>
      {children}
    </ul>
  )
}

function Card({ title, superTitle, href, color, body, image, button }) {
  return (
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
      <div className="order-1 sm:ml-6 xl:ml-0">
        <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
          {button ? (
            <>
              <span className={clsx('mb-1 block text-sm leading-6', color)}>{superTitle}</span>
              {title}
            </>
          ) : (
            <a
              href={href}
              className={clsx(
                'before:absolute before:inset-0',
                !button && 'hover:text-slate-600 dark:hover:text-white'
              )}
            >
              <span className={clsx('mb-1 block text-sm leading-6', color)}>{superTitle}</span>
              {title}
            </a>
          )}
        </h3>
        <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">{body}</div>
        {button && (
          <Button href={href} className="mt-6">
            {button}
          </Button>
        )}
      </div>
      <img
        src={image}
        alt=""
        className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
        width="1216"
        height="640"
      />
    </li>
  )
}

function Icon({ children, className }) {
  return (
    <div
      className={clsx(
        'relative pt-full rounded-full ring-1 ring-inset ring-slate-900/5',
        className
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  )
}

export default function Resources() {
  return (
    <BasicLayout>
      <header className="mb-20 max-w-xl">
        <p className="mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
          资源
        </p>
        <h1 className="mb-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200">
          其他一切你需要建立令人敬畏的顺风CSS网站
        </h1>
        <p className="text-lg text-slate-700 dark:text-slate-400">
          我们认为Tailwind是一个很棒的CSS框架，但是你需要的不仅仅是一个CSS框架来产生令人敬畏的视觉效果。
        </p>
      </header>

      <div className="space-y-16">
        <section>
          <h2 className="mb-2 text-2xl leading-7 tracking-tight text-slate-900 font-bold dark:text-slate-200">
            设计资源
          </h2>
          <div className="mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark">
            <p>
              设计是很难的，所以我们做了一些资源来帮助你。这些资源是帮助您进行设计的好方法，也是支持框架开发的好方法。
            </p>
          </div>

          <ul className="sm:space-y-6">
            {[
              {
                title: '重构用户界面',
                description: '学习UI设计',
                images: [
                  require('@/img/resources/refactoringui-small@75.jpg').default.src,
                  require('@/img/resources/refactoringui@75.jpg').default.src,
                ],
                color: 'text-blue-500',
                href: 'https://refactoringui.com/?ref=resources',
                body: (
                  <>
                    <p>
                      重构UI是Adam Wathan和Steve Schoger为开发者设计的书籍和系列视频。它涵盖了我们所知道的一切，让事情看起来很棒。
                    </p>
                    <p>
                      到目前为止，已经有近一万人使用了它，并对它如何帮助他们改进工作有了各种各样的精彩描述。
                    </p>
                  </>
                ),
              },
              {
                title: '顺风用户界面',
                description: '漂亮的UI组件，由顺风CSS的创造者精心制作',
                images: [
                  require('@/img/resources/tailwindui-small@75.jpg').default.src,
                  require('@/img/resources/tailwindui@75.jpg').default.src,
                ],
                color: 'text-sky-500',
                href: 'https://tailwindui.com/?ref=resources',
                body: (
                  <>
                    <p>
                      顺风UI是一个专业设计，预构建，完全响应的HTML片段的集合，您可以将其放入顺风项目中。
                    </p>
                    <p>
                      目前有超过550个组件可用于三个不同的类别(市场营销，应用程序UI和电子商务)，我们一直在添加更多。
                    </p>
                  </>
                ),
              },
            ].map(({ title, description, images, color, body, href }) => (
              <li
                key={title}
                className="-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50"
              >
                <div className="flex-auto">
                  <h3 className={clsx('mb-4 text-sm leading-6 font-semibold', color)}>{title}</h3>
                  <p className="mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200">
                    {description}
                  </p>
                  <div className="mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400">
                    {body}
                  </div>
                  <Button
                    href={href}
                    color={[
                      'bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0',
                      'text-slate-300 group-hover:text-slate-200',
                    ]}
                    darkColor="gray"
                  >
                    了解更多<span className="sr-only">, {title}</span>
                  </Button>
                </div>
                <div className="w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]">
                  <div className="aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800">
                    <picture>
                      <source type="image/jpeg" srcSet={images[1]} media="(min-width: 640px)" />
                      <img src={images[0]} alt="" decoding="async" />
                    </picture>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-2xl leading-7 tracking-tight text-slate-900 font-bold dark:text-slate-200">
            额外的资源
          </h2>
          <div className="mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark">
            <p>
              Tailwind并不是我们维护的唯一一个开源项目。我们制作了一些其他资源来帮助您进行设计和开发工作流程。
            </p>
          </div>

          <CardGroup>
            {[
              {
                superTitle: '无头 UI',
                title: '完全无样式，完全可访问的UI组件',
                body: (
                  <p>
                    完全无样式，完全可访问的UI组件，旨在与顺风CSS完美集成。
                  </p>
                ),
                href: 'https://headlessui.dev',
                image: require('@/img/resources/headlessui@75.jpg').default.src,
                color: 'text-indigo-500',
              },
              {
                superTitle: '英雄',
                title: '美丽的手工制作的SVG图标，由顺风CSS的制造商。',
                body: (
                  <p>
                    一套450+免费麻省理工学院许可的SVG图标。可作为基本的SVG图标，并通过第一方React和Vue库。
                  </p>
                ),
                href: 'https://heroicons.com',
                image: require('@/img/resources/heroicons@75.jpg').default.src,
                color: 'text-purple-500',
              },
              {
                superTitle: '英雄模式',
                title: '无缝SVG背景模式的制造商顺风CSS。',
                body: (
                  <p>
                    超过100个免费的麻省理工学院许可的高质量SVG模式的集合，供您在web项目中使用。
                  </p>
                ),
                href: 'https://heropatterns.com',
                image: require('@/img/resources/heropatterns@75.jpg').default.src,
                color: 'text-cyan-500',
              },
            ].map((card) => (
              <Card
                key={card.title}
                button={
                  <>
                    了解更多<span className="sr-only">, {card.title}</span>
                  </>
                }
                {...card}
              />
            ))}
          </CardGroup>
        </section>

        <section className="border-t border-slate-100 pt-16 dark:border-slate-200/5">
          <h2 className="mb-2 text-xl tracking-tight text-slate-900 font-bold dark:text-slate-200">
            截屏
          </h2>
          <div className="mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark">
            <p>
              前往我们的官方YouTube频道，深入了解数十个视频，这些视频将教你从顺风基础知识到高级概念的所有内容。
            </p>
          </div>

          <CardGroup className="mb-10">
            {[
              {
                superTitle: '基本面',
                title: '将自定义设计系统转换为顺风CSS',
                body: (
                  <p>
                    了解如何配置Tailwind以创建您自己的专门针对您的项目进行调优的实用程序框架。
                  </p>
                ),
                href: 'https://www.youtube.com/watch?v=cZc4Jn5nK3k',
                image: require('@/img/resources/translating-design-system@75.jpg').default.src,
                color: 'text-sky-500',
              },
              {
                superTitle: '基本面',
                title: '向现有项目添加顺风CSS',
                body: (
                  <p>
                    了解如何将顺风CSS添加到现有项目中，而不会遇到命名冲突或特异性问题。
                  </p>
                ),
                href: 'https://www.youtube.com/watch?v=oG6XPy1t1KA',
                image: require('@/img/resources/existing-project@75.jpg').default.src,
                color: 'text-pink-500',
              },
              {
                superTitle: '我们如何构建它',
                title:
                  '用顺风CSS、Shopify和Next.js构建一个无头电子商务商店',
                body: (
                  <p>
                    使用GraphQL API从Shopify商店获取产品，并使用Tailwind UI组装页面。
                  </p>
                ),
                href: 'https://www.youtube.com/watch?v=xNMYz74zNHM',
                image: require('@/img/resources/ecommerce-store@75.jpg').default.src,
                color: 'text-indigo-500',
              },
            ].map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </CardGroup>

          <Button href="https://www.youtube.com/tailwindlabs">看看我们所有的视频</Button>
        </section>

        <section className="border-t border-slate-100 pt-16 dark:border-slate-200/5">
          <h2 className="mb-2 text-xl tracking-tight text-slate-900 font-bold dark:text-slate-200">
            联系和贡献
          </h2>
          <div className="mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark">
            <p>
              无论您是初学者还是高级用户，加入顺风社区都是与志趣相投的人联系的好方法，他们正在使用该框架构建令人敬畏的东西。
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2">
            {[
              {
                title: 'Discord',
                href: '/discord',
                description:
                  '加入Discord群组的10,000多名成员，讨论顺风和其他相关主题。',
                icon: (
                  <Icon className="bg-[#838CF1]/[0.15] dark:bg-indigo-700">
                    <DiscordIcon className="w-6 h-auto dark:fill-indigo-200" />
                  </Icon>
                ),
                className:
                  'ring-1 ring-slate-900/10 dark:bg-indigo-500 dark:ring-0 dark:highlight-white/20',
              },
              {
                title: 'GitHub Discussions',
                href: 'https://github.com/tailwindlabs/tailwindcss/discussions',
                description:
                  '你的项目有问题吗?与顺风社区的其他成员联系以获得一些帮助。',
                icon: (
                  <Icon className="bg-slate-100 dark:bg-slate-800">
                    <GitHubIcon className="w-7 h-auto dark:fill-slate-400" />
                  </Icon>
                ),
                className:
                  'ring-1 ring-slate-900/10 dark:bg-slate-600 dark:ring-0 dark:highlight-white/20',
              },
            ].map(({ title, href, description, icon, className }) => (
              <li key={title} className="relative flex flex-row-reverse">
                <div className="peer group flex-auto ml-6">
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
                    <a
                      href={href}
                      className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4"
                    >
                      {title}
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
                    </a>
                  </h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {description}
                  </p>
                </div>
                <div
                  className={clsx(
                    'flex-none w-16 h-16 p-[0.1875rem] rounded-full shadow overflow-hidden pointer-events-none',
                    className
                  )}
                >
                  {icon}
                </div>
                <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4" />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </BasicLayout>
  )
}

Resources.layoutProps = {
  meta: {
    title: '资源',
  },
  Layout: DocumentationLayout,
}
