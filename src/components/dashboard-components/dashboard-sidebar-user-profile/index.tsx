import Image from "next/image";

import styles from "src/styles/components/dashboard-components/dashboard-sidebar-user-profile/styles.module.scss";

export function DashboardSideBarUserProfile() {
  return (
    <article className={styles.dashboardSideBarUserProfileWrapper}>
      <div>
        <Image
          width={76}
          height={76}
          src="/images/profile.png"
          alt="User profile"
        />
      </div>
      <ul className={styles.dashboardSideBarUserProfileData}>
        <li>
          <strong>230</strong>
          <span>Books</span>
        </li>
        <li>
          <strong>20</strong>
          <span>Authors</span>
        </li>
        <li>
          <strong>34</strong>
          <span>Deleted</span>
        </li>
      </ul>
    </article>
  );
}