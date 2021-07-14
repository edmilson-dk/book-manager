import { FiSearch } from "react-icons/fi";

import styles from "src/styles/components/dashboard-components/dashboard-search-input/styles.module.scss";

export function DashboardSearchInput() {
  return (
    <div className={styles.dashboardSearchInput}>
      <input placeholder="Search" />
      <button>
        <FiSearch />
      </button>
    </div>
  );
}