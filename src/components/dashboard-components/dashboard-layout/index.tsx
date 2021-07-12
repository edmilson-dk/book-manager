import Image from "next/image";
import {
  FiHome,
  FiPlusSquare,
  FiAlignCenter,
  FiSettings,
  FiPower
} from "react-icons/fi";

import { DashboardNavigatorBtn } from "../dashboard-navigator-btn";
import { DashboardLayoutPropsType } from "./types";

import styles from "src/styles/components/dashboard-components/dashboard-layout/styles.module.scss";

export function DashboardLayout({ children }: DashboardLayoutPropsType) {
  return (
    <main className={styles.dashboardLayoutWrapper}>
      <aside className={styles.dashboardLayoutSideBar}>
        <nav>
          <div>
            <Image
              width={70}
              height={70}
              objectFit="cover"
              alt="Book manager logo"
              src="/images/logo-small.svg"
            />
          </div>

          <DashboardNavigatorBtn
            IconComponent={<FiHome />}
            toRoute="/dashboard"
          />
          <DashboardNavigatorBtn
            IconComponent={<FiPlusSquare />}
            toRoute="/create"
          />
          <DashboardNavigatorBtn
            IconComponent={<FiAlignCenter />}
            toRoute="/create"
          />
          <DashboardNavigatorBtn
            IconComponent={<FiSettings />}
            toRoute="/create"
          />
        </nav>

        <DashboardNavigatorBtn
          IconComponent={<FiPower />}
          toRoute="/logout"
        />
      </aside>
      <section>
        {children}
      </section>
    </main>
  );
}