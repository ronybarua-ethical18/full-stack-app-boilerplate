-- Remove RAG-related tables and workspace vector id (pure auth + workspaces starter).

ALTER TABLE "ChatSession" DROP CONSTRAINT IF EXISTS "ChatSession_userId_fkey";
ALTER TABLE "ChatSession" DROP CONSTRAINT IF EXISTS "ChatSession_workspaceId_fkey";
DROP TABLE IF EXISTS "ChatSession";

ALTER TABLE "Document" DROP CONSTRAINT IF EXISTS "Document_userId_fkey";
ALTER TABLE "Document" DROP CONSTRAINT IF EXISTS "Document_workspaceId_fkey";
DROP TABLE IF EXISTS "Document";

ALTER TABLE "Workspace" DROP COLUMN IF EXISTS "vectorDbId";
