import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiUser, FiMail, FiLock, FiBookOpen } from "react-icons/fi";

import { ButtonField } from "src/components/form-components/button-field";
import { InputField } from "src/components/form-components/input-field";
import { TextAreaField } from "src/components/form-components/textarea-field";

import styles from "src/styles/pages/sign-up/styles.module.scss";

export default function SignUpPage() {
  const router = useRouter();

  function handleSignUpClick() {
    router.push("/dashboard");
  }

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
            <ButtonField
              text="Sign up"
              type="button"
              onClick={handleSignUpClick}
            />
          </footer>
        </form>
      </section>
    </main>
  );
}