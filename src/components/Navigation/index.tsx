'use client'
import React, { useEffect } from 'react'
import { useConfig } from '@payloadcms/ui'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { GlobalEnabled, ModuleEnabled } from '../../constrant-types'
import { GLOBAL_ENABLED, MODULE_ENABLED } from '@/../constants'
import Link from 'next/link'
import Logo from '@payload-defaults/components/Logo'

const Navigation: React.FC = () => {
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
    <nav className={styles.nav}>
      <Link href="https://www.lyttledevelopment.com/?ref=client-dashboard"
            className={styles.logo_link}
            target="_blank"
      >
        <Logo className={styles.logo} />
      </Link>

      <h4 className={classNames(styles.group__title, {
        [styles.active as string]: currentPath === '/admin',
      })}>
        <Link href="/admin" className={classNames(styles.heading_link, {
          [styles.active as string]: currentPath === '/admin',
        })}>Dashboard</Link>
      </h4>
      
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
  )
}

export default Navigation
