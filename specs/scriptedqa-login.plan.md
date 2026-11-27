# Scripted QA Login Test Plan

## Application Overview

Scripted QA provides a sign-in page for its automation playground. This plan covers the successful login sanity path and rejection of an incorrect username or password.

## Test Scenarios

### 1. Login

**Seed:** `tests/seed.spec.ts`

Each scenario starts independently in a fresh browser context with no cookies or local-storage entries.

#### 1.1. should-login-with-valid-credentials

**File:** `tests/login/should-login-with-valid-credentials.spec.ts`

**Steps:**
1. Open `https://www.scriptedqa.com/`.
   - expect: The `Sign In` heading, `Username` textbox, `Password` textbox, and `Sign In` button are visible.
2. Enter `admin` in the `Username` textbox.
3. Enter `Pass@9211` in the `Password` textbox.
4. Select `Sign In`.
   - expect: The browser navigates to `/home`.
   - expect: The home page displays `Welcome back, Automation Engineer!` and a `Sign Out` button.
   - expect: Local storage contains a non-empty `authToken` and `keepLoggedIn` set to `true`.

#### 1.2. should-reject-incorrect-username

**File:** `tests/login/should-reject-incorrect-username.spec.ts`

**Steps:**
1. Open `https://www.scriptedqa.com/` in a fresh browser context.
2. Enter `unknown-user` in the `Username` textbox.
3. Enter `AnyPass123!` in the `Password` textbox.
4. Select `Sign In`.
   - expect: The browser remains at `/`.
   - expect: The message `Oops! The credentials are incorrect.` is visible.
   - expect: The user is not authenticated; local storage has no items and home-page content is not displayed.

#### 1.3. should-reject-incorrect-password

**File:** `tests/login/should-reject-incorrect-password.spec.ts`

**Steps:**
1. Open `https://www.scriptedqa.com/` in a fresh browser context.
2. Enter `admin` in the `Username` textbox.
3. Enter `WrongPass1!` in the `Password` textbox.
4. Select `Sign In`.
   - expect: The browser remains at `/`.
   - expect: The message `Oops! The credentials are incorrect.` is visible.
   - expect: The user is not authenticated; local storage has no items and home-page content is not displayed.

## Execution Notes

- The login page displays the demo credentials `admin` / `Pass@9211`.
- Use semantic locators: textbox names `Username` and `Password`, and button name `Sign In`.
- Assert that `authToken` is non-empty rather than checking its value, which changes between successful logins.
