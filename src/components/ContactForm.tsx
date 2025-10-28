"use client";

import { styled } from "styled-components";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SectionTitle, { Header, SectionSubtitle, Text } from "./SectionTitles";
import { colors } from "@/styles/theme";

const Form = styled.form`
  background-color: ${colors.dark};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 90vw;
  max-width: 800px;
  margin: 1rem;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  margin: 1rem;
  border: 1px lightgray solid;
`;

const FormTextArea = styled.textarea`
  padding: 0.5rem;
  margin: 1rem;
  border: 1px lightgray solid;
  height: 80px;
`;

const FormButton = styled.button`
  height: 50px;
  border-radius: 2rem;
  background-color: ${colors.light};
  color: ${colors.dark};
  width: 40%;
  align-self: center;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &&:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    background-color: ${colors.sales};
`;

const ErrorAlert = styled.p`
  color: red;
`;

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const request = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };

      const response = await fetch("/api/contact", request);
      const errorText = await response.text();

      if (!response.ok) throw new Error(`Submit request failed ${errorText}`);
      reset();
      alert("Message sent! Thanks for contacting us.");
    } catch (error) {
      alert("There was an error sending your message.");
      console.error(error);
    }
  };

  return (
    <>
      <SectionTitle id="contact-form">Contact Us</SectionTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <SectionSubtitle className="light">
          Contact us now for a free bat survey quote within 48 hours
        </SectionSubtitle>
        <Text className="light">First Name*</Text>
        {errors.firstName && (
          <ErrorAlert>{errors.firstName.message}</ErrorAlert>
        )}
        <FormInput {...register("firstName")} />
        <Text className="light">Last Name*</Text>
        {errors.lastName && <ErrorAlert>{errors.lastName.message}</ErrorAlert>}
        <FormInput {...register("lastName")} />
        <Text className="light">Email*</Text>
        {errors.email && <ErrorAlert>{errors.email.message}</ErrorAlert>}
        <FormInput {...register("email")} />
        <Text className="light">Tell us about your survey requirements*</Text>
        {errors.message && <ErrorAlert>{errors.message.message}</ErrorAlert>}
        <FormTextArea {...register("message")} />
        <FormButton type="submit" title="Submit">
          Submit
        </FormButton>
      </Form>
      <Header style={{ width: "90vw" }}>
        Alternatively email us at{" "}
        <a href="mailto:admin@ectoecology.com?subject=Survey%20Request&body=Hi%20there,%0AI'd%20like%20to%20book%20a%20survey.">
          {" "}
          admin@ectoecology.com
        </a>
      </Header>
    </>
  );
};
export default ContactForm;
