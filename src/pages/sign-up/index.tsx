import Image from "next/image";

import { InputField } from "src/components/form-components/input-field";

export function SignUpPage() {
  return (
    <main>
      <section>
        <div>
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
          />
        </form>
      </section>
    </main>
  )
}