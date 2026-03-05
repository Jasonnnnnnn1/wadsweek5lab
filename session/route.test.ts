/**
 * @jest-environment node
 */

jest.mock("next/server", () => ({
  NextResponse: {
    json: (data: any, init?: any) => ({
      status: init?.status || 200,
      json: async () => data,
    }),
  },
}));

jest.mock("firebase-admin/app", () => ({
  initializeApp: jest.fn(),
  getApps: jest.fn(() => []),
  cert: jest.fn(),
}));

jest.mock("firebase-admin/auth", () => ({
  getAuth: () => ({
    verifyIdToken: jest.fn().mockResolvedValue({ uid: "123" }),
  }),
}));

import { POST } from "./route";

describe("Session API", () => {
  it("returns 401 if no token", async () => {
    const mockRequest = {
      headers: {
        get: jest.fn().mockReturnValue(null),
      },
    } as any;

    const response = await POST(mockRequest);
    expect(response.status).toBe(401);
  });
});