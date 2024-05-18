import { EMAIL_URL } from "@common/constants";
import { useCustomTranslation } from "@common/i18n";
import { rules } from "@common/validation";
import { FormInput } from "@components/Atoms/FormInput/FormInput";
import { Title } from "@components/Atoms/styles";
import { Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { forwardRef } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface ContactProps {
  id?: string;
}

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

export const Contact = forwardRef<HTMLDivElement, ContactProps>(
  (props, ref) => {
    const { id } = props;
    const { tc, tca } = useCustomTranslation();

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: "onBlur",
      defaultValues,
    });

    const onSubmit = async (data: FieldValues<typeof defaultValues>) => {
      console.log("data", data);
      try {
        const response = await fetch(EMAIL_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(data),
        });

        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.log("Error sending email:", error);
      }
    };

    return (
      <Box component="footer" ref={ref} id={id}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Title variant="h2" sx={{ marginBottom: 1 }}>
              {tc("contact")}
            </Title>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              {tca(
                "are you working on something great?! I would love to help make it happen! drop me a letter and start your project right now! just do it.",
                "! "
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box component="form" mb={3} onSubmit={handleSubmit(onSubmit)}>
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

              <Box textAlign="right" mt={1}>
                <Button type="submit">{tc("send message")}</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
);
