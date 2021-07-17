import Image from "next/image";

import { DashboardLayout } from "src/components/dashboard-components/dashboard-layout";
import { DashboardSearchInput } from "src/components/dashboard-components/dashboard-search-input";
import { DashboardSideBarUserProfile } from "src/components/dashboard-components/dashboard-sidebar-user-profile";
import { TitleComponent } from "src/components/dashboard-components/titles";
import { ProgressBarCircle } from "src/components/dashboard-components/progress-bar-circle";

import styles from "src/styles/pages/dashboard/styles.module.scss";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <section className={styles.dashboardHomeWrapper}>
        <article className={styles.dashboardHomeContent}>
          <DashboardSearchInput />
          <div>
            <TitleComponent text="Recents" />

            <article>
              <Image
                src="/images/recents/regex-book.png"
                alt="Regex Book"
                width={112}
                height={160}
                objectFit="cover"
              />
              <Image
                src="/images/recents/ref-ebook.png"
                alt="Regex Book"
                width={112}
                height={160}
                objectFit="cover"
              />
              <Image
                src="/images/recents/ddd-ebook.png"
                alt="Regex Book"
                width={112}
                height={160}
                objectFit="cover"
              />
              <Image
                src="/images/recents/gof-ebook.png"
                alt="Regex Book"
                width={112}
                height={160}
                objectFit="cover"
              />
            </article>
          </div>

        </article>
        <aside className={styles.dashboardHomeSidebar}>
          <div className={styles.dashboardHomeSidebarBg}>
            <Image
              width={340}
              height={226}
              src="/images/sidebar-bg.png" alt="Sidebar Logo" />
          </div>
          <DashboardSideBarUserProfile />
          <div>
            <ProgressBarCircle borderColor="#1E9DF9" percent={60} />
            <ProgressBarCircle borderColor="#F9871E" percent={30} />
            <ProgressBarCircle borderColor="#F91E45" percent={10} />
          </div>
        </aside>
      </section>
    </DashboardLayout>
  );
}