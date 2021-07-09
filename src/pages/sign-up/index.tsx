import Image from "next/image";
import Link from "next/link";
import { FiUser, FiMail, FiLock, FiBookOpen } from "react-icons/fi";

import { InputField } from "src/components/form-components/input-field";
import { TextAreaField } from "src/components/form-components/textarea-field";
import styles from "src/styles/pages/sign-up/styles.module.scss";

export function SignUpPage() {
  return (
    <main className={styles.signupMain}>
      <section className={styles.signupContainer}>
        <div className="logo">
          <Image
            width={130}
            height={130}
            objectFit="cover"
            alt="Book manager logo"
            src="/images/logo-large.svg"
          />
        </div>
        <form>
          <InputField
            name="name"
            type="text"
            placeholder="Name"
            IconComponent={<FiUser />}
          />
          <InputField
            name="email"
            type="email"
            placeholder="Email"
            IconComponent={<FiMail />}
          />
          <InputField
            name="password"
            type="text"
            placeholder="Password"
            IconComponent={<FiLock />}
          />
          <TextAreaField
            name="bio"
            placeholder="Bio"
            IconComponent={<FiBookOpen />}
          />

          <footer>
            <p>
              Already have an account?
              <Link href="/login">between here</Link>
            </p>
          </footer>
        </form>
      </section>
    </main>
  )
}