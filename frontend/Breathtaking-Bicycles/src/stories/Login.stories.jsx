import { within, userEvent, waitFor } from '@storybook/test';
import { expect } from '@storybook/test';
import Login from '../login/Login';

export default {
  title: 'Pages/Login',
  component: Login,
  parameters: {
    layout: 'centered',
  },
};

let originalFetch;

function mockFetch(response, ok = true) {
  window.fetch = () =>
    Promise.resolve({
      ok,
      json: () => Promise.resolve(response),
    });
}

export const Default = () => <Login />;

export const EmptyFields = () => {
  localStorage.clear();
  return <Login />;
};
EmptyFields.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText('Login'));
  await waitFor(() => {
    expect(localStorage.getItem('jwtToken')).toBe(null);
  });
};

export const SuccessfulLogin = () => {
  localStorage.clear();
  originalFetch = window.fetch;
  mockFetch({ token: 'mocked-jwt-token' });
  return <Login />;
};
SuccessfulLogin.play = async ({ canvasElement }) => {
  const originalAssign = window.location.assign;
  window.location.assign = (url) => {
    console.log('Redirect prevented to:', url);
  };

  let hrefValue = '';
  Object.defineProperty(window.location, 'href', {
    configurable: true,
    set: (url) => {
      hrefValue = url;
      console.log('Redirect prevented by setting href to:', url);
    },
    get: () => hrefValue,
  });

  mockFetch({ token: 'mocked-jwt-token' });

  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByPlaceholderText('Gebruikersnaam'), 'admin');
  await userEvent.type(canvas.getByPlaceholderText('Wachtwoord'), 'correctpass');
  await userEvent.click(canvas.getByText('Login'));

  await waitFor(() => {
    expect(localStorage.getItem('jwtToken')).toBe('mocked-jwt-token');
  });

  window.location.assign = originalAssign;
};

export const FailedLogin = () => {
  localStorage.clear();
  originalFetch = window.fetch;
  mockFetch({ message: 'Invalid credentials' }, false);
  return <Login />;
};
FailedLogin.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByPlaceholderText('Gebruikersnaam'), 'admin');
  await userEvent.type(canvas.getByPlaceholderText('Wachtwoord'), 'wrongpass');
  await userEvent.click(canvas.getByText('Login'));

  await waitFor(() => {
    expect(canvas.getByText('Gebruikersnaam of wachtwoord incorrect!')).toBeInTheDocument();
  });

  window.fetch = originalFetch;
};
