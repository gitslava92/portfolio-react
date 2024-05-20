import { Section } from "@components/Atoms/styles";
import { ContactForm } from "@components/Molecules/ContactForm/ContactForm";
import { forwardRef } from "react";

interface ContactProps {
  id?: string;
}

export const Contact = forwardRef<HTMLDivElement, ContactProps>(
  (props, ref) => {
    const { id } = props;

    return (
      <Section component="section" ref={ref} id={id}>
        <ContactForm />
      </Section>
    );
  }
);
