import Image from "next/image";
import { FiTool } from "react-icons/fi";

import { DashboardInReadingBookProps } from "./types";

import styles from "src/styles/components/dashboard-in-reading-book/styles.module.scss";

export function DashboardInReadingBook({
  bookAuthor,
  bookImageAlt,
  bookImageSrc,
  bookReadPercent,
  bookTitle
}: DashboardInReadingBookProps) {
  return (
    <article className={styles.dashboardInReadingBookWrapper}>
      <div className={styles.dashboardInReadingBookInfos}>
        <div className={styles.dashboardInReadingBookImage}>
          <Image
            src={bookImageSrc}
            alt={bookImageAlt}
            width={60.50}
            height={80}
            objectFit="cover"
          />
        </div>
        <p>
          <strong>{bookTitle}</strong>
          <span>{bookAuthor}</span>
        </p>
      </div>
      <div className={styles.dashboardInReadingBookPercent}>
        <span>{bookReadPercent}%</span>
        <div style={{
          width: `${bookReadPercent}%`,
        }}></div>
      </div>
      <button type="button" className={styles.dashboardInReadingBookButton}>
        <FiTool />
      </button>
    </article>
  );
}