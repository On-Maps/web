import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link';
import styles from '@/styles/Home.module.css'
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
} from '@mui/material';
import { Form } from '@/components/Form';
import { useForm } from 'react-hook-form';
import { login } from './validation';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const formHandler = useForm<{
    username: string
    password: string
  }>({
    mode: 'all',
    resolver: yupResolver(login()),
    defaultValues: {
      username: '',
      password: '',
    },
  })
  return (
    <Grid container sx={useStyles().main}>
      <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', zIndex: 1600 }}>
        <Card sx={useStyles().root}>
          <CardContent>
            <Typography variant="h5" sx={useStyles().title}>
              Bem-vindo ao login 👋
            </Typography>
            <Form
              id="login-form"
              handler={formHandler}
              onSubmit={async (data) => {
                console.log(data)
              }}
              sx={useStyles().form}
            >
              <TextField
                label="Usuário"
                variant="outlined"
                sx={useStyles().input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="Senha"
                variant="outlined"
                sx={useStyles().input}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Box>
                <Typography variant="body1">
                  Não tem uma conta?{' '}
                  <Link href="/cadastro" style={{ color: '#2E53AC' }}>
                    Cadastre-se
                  </Link>
                </Typography>
                <Typography variant="body1">
                  Esqueceu sua senha?{' '}
                  <Link href="/esqueceuSenha" style={{ color: '#2E53AC' }}>
                    Recupere-a
                  </Link>
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                sx={useStyles().button}
              >
                Login
              </Button>
            </Form>
          </CardContent>
        </Card>
      </Grid>
      <div className={`${styles.Cloud} ${styles.Foreground}`}></div>
      <div className={`${styles.Cloud} ${styles.Background}`}></div>
      <div className={`${styles.Cloud} ${styles.Foreground}`}></div>
      <div className={`${styles.Cloud} ${styles.Background}`}></div>
      <div className={`${styles.Cloud} ${styles.Background}`}></div>
      <div className={`${styles.Cloud} ${styles.Foreground}`}></div>
      <div className={`${styles.Cloud} ${styles.Background}`}></div>
      <div className={`${styles.Cloud} ${styles.Foreground}`}></div>
      <div className={`${styles.Cloud} ${styles.Background}`}></div>
      <div className={`${styles.Cloud} ${styles.Background}`}></div>
      <div className={`${styles.Cloud} ${styles.Background}`}></div>
      <div className={`${styles.Cloud} ${styles.Foreground}`}></div>
    </Grid >
  );
}

const useStyles = () => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 1,
    height: '100vh',
    background: 'linear-gradient(45deg, #345494, #2f4c8f, #7c8cbc, #345494)',
    animation: '$colors 15s ease infinite',
    '-webkit-animation': '$colors 15s ease infinite',
  },
  '@keyframes colors': {
    '0%': { background: '#345494' },
    '25%': { background: '#2f4c8f' },
    '50%': { background: '#7c8cbc' },
    '75%': { background: '#2f4c8f' },
    '100%': { background: '#345494' },
  },
  root: {
    padding: 2,
    width: '50%',
  },
  title: {
    textAlign: 'center',
    marginBottom: 4,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: 2,
  },
  button: {
    alignSelf: 'center',
    marginTop: 2,
    width: '100%',
  },
});
