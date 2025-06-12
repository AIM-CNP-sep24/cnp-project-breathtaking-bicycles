import { within, userEvent, waitFor } from '@storybook/test'
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
  global.fetch = () =>
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
  originalFetch = global.fetch;
  mockFetch({ token: 'mocked-jwt-token' });
  return <Login />;
};
SuccessfulLogin.play = async ({ canvasElement }) => {
  // Spy on window.location.assign to prevent navigation
  const originalAssign = window.location.assign;
  window.location.assign = (url) => {
    console.log('Redirect prevented to:', url);
  };

  // Also spy on href setter if your code uses that
  let hrefValue = '';
  Object.defineProperty(window.location, 'href', {
    configurable: true,
    set: (url) => {
      hrefValue = url;
      console.log('Redirect prevented by setting href to:', url);
    },
    get: () => hrefValue,
  });

  // Mock fetch as before
  mockFetch({ token: 'mocked-jwt-token' });

  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByPlaceholderText('Gebruikersnaam'), 'admin');
  await userEvent.type(canvas.getByPlaceholderText('Wachtwoord'), 'correctpass');
  await userEvent.click(canvas.getByText('Login'));

  await waitFor(() => {
    expect(localStorage.getItem('jwtToken')).toBe('mocked-jwt-token');
  });

  // Optionally restore original assign method
  window.location.assign = originalAssign;
};



export const FailedLogin = () => {
  localStorage.clear();
  originalFetch = global.fetch;
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

  global.fetch = originalFetch;
};
