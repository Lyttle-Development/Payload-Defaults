'use client'
import React, { useEffect } from 'react'
import { useConfig } from '@payloadcms/ui'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { GlobalEnabled, ModuleEnabled } from '../../constrant-types'
import { GLOBAL_ENABLED, MODULE_ENABLED } from '@/../constants'
import Link from 'next/link'


const Dashboard: React.FC = () => {
  const { config } = useConfig() ?? {}
  const [currentPath, setCurrentPath] = React.useState<string>(window.location.pathname)

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [window.location.pathname])


  const collections = (config?.collections ?? []).filter(
    (c) => (c?.slug in MODULE_ENABLED && MODULE_ENABLED[c?.slug as keyof ModuleEnabled]) ?? false,
  )
  const globals = (config?.globals ?? []).filter(
    (g) => (g?.slug in GLOBAL_ENABLED && GLOBAL_ENABLED[g?.slug as keyof GlobalEnabled]) ?? false,
  )

  return (
    <section className={styles.container}>
      <article>
        <h1 className={styles.title}>
          Welcome to your dashboard.
        </h1>
        <p>
          Here you can manage your collections and globals. Click on the links
          in the sidebar to navigate to the respective sections.
        </p>
      </article>
      <nav className={styles.nav}>
        {collections?.length > 0 && (
          <>
            <h4 className={styles.group__title}>Collections</h4>
            <ul className={styles.list}>
              {collections.map((collection) => (
                <li key={collection.slug}
                    className={styles.list_item}>
                  <Link
                    href={`/admin/collections/${collection.slug}`}
                    className={classNames(styles.link, {
                      [styles.active as string]: currentPath.startsWith(
                        '/admin/collections/' + collection.slug,
                      ),
                    })}
                  >
                    {'' + collection.labels.plural}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        {globals?.length > 0 && (
          <>
            <h4 style={{ padding: '1rem' }}>Globals</h4>
            <ul className={styles.list}>
              {globals
                .map((global) => (
                  <li key={global.slug}
                      className={styles.list_item}>
                    <Link
                      href={`/admin/globals/${global.slug}`}
                      className={classNames(styles.link, {
                        [styles.active as string]: currentPath.startsWith(
                          '/admin/globals/' + global.slug,
                        ),
                      })}
                    >
                      {'' + global.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </>
        )}
      </nav>
    </section>
  )
}

export default Dashboard
