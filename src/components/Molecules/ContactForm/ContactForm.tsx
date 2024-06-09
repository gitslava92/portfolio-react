import { EMAIL_URL } from "@common/constants";
import { useCustomTranslation } from "@common/i18n";
import { rules } from "@common/validation";
import { FormInput } from "@components/Atoms/FormInput/FormInput";
import { Title } from "@components/Atoms/styles";
import { Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { Modal } from "@components/Molecules/Modal/Modal";

interface ContactFormProps {
  setModalClose?: () => void;
  isModalMode?: boolean;
}

const defaultValues = {
  name: "",
  email: "",
  message: ""
};

export const ContactForm = ({
                              setModalClose,
                              isModalMode
                            }: ContactFormProps) => {
  const { tc, tca } = useCustomTranslation();
  const [message, setMessage] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onBlur",
    defaultValues
  });

  const onErrorClose = () => {
    setMessage("");
    setModalClose();
  };

  const onSubmit = async (data: FieldValues<typeof defaultValues>) => {
    try {
      const response = await fetch(EMAIL_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      setMessage(result.message);

      setTimeout(() => {
        onErrorClose();
      }, 2000);
    } catch (error) {
      setMessage("something went wrong. try again later");

      setTimeout(() => {
        onErrorClose();
      }, 2000);
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={isModalMode ? 12 : 4}>
          <Title variant="h2" sx={{ marginBottom: 1 }}>
            {tc(isModalMode ? "let’s work together" : "contact me")}
          </Title>

          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {tca(
              "are you working on something great?! i would love to help make it happen! drop me a letter and start your project right now! just do it.",
              "! "
            )}
          </Typography>
        </Grid>

        <Grid item xs={12} md={isModalMode ? 12 : 8}>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <FormInput
                  name="name"
                  label={tc("name")}
                  fullWidth
                  helperText={errors?.name ? errors.name.message : ""}
                  control={control}
                  rules={rules(tc).name}
                />

                <FormInput
                  name="email"
                  label={tc("email")}
                  fullWidth
                  helperText={errors?.email ? errors.email.message : ""}
                  control={control}
                  rules={rules(tc).email}
                />
              </Grid>

              <Grid item xs={12} md={7}>
                <FormInput
                  name="message"
                  label={tc("message")}
                  multiline
                  rows={4.5}
                  fullWidth
                  helperText={errors?.message ? errors.message.message : ""}
                  control={control}
                  rules={rules(tc).message}
                />
              </Grid>
            </Grid>

            <Box display="flex" justifyContent="right" gap={3} mt={2} mb={2}>
              {isModalMode && (
                <Button variant="outlined" onClick={setModalClose}>
                  {tc("back to cv")}
                </Button>
              )}

              <Button type="submit">{tc("send message")}</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {!!message && (
        <Modal open={!!message} setClose={onErrorClose}>{message}</Modal>
      )}
    </>
  );
};
