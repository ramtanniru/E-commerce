// api/auth/error/page.jsx
'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const errorMessages = {
  Configuration: "There was a configuration error.",
  AccessDenied: "You do not have permission to access this page.",
  Verification: "Unable to verify your credentials.",
  default: "An unexpected error occurred. Please try again later."
};

function AuthErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error'); // Access the 'error' query parameter
  const errorMessage = errorMessages[error] || errorMessages.default;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Authentication Error</h1>
      <p>{errorMessage}</p>
      <Link href="/api/auth/signin">
        Back to Sign In
      </Link>
    </div>
  );
}

export default function AuthError() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AuthErrorContent />
    </Suspense>
  );
}
