import Image from "next/image";
import { DashboardLayout } from "src/components/dashboard-components/dashboard-layout";
import { DashboardSearchInput } from "src/components/dashboard-components/dashboard-search-input";
import { TitleComponent } from "src/components/dashboard-components/titles";

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
          <h2>Dashboard</h2>
        </aside>
      </section>
    </DashboardLayout>
  );
}