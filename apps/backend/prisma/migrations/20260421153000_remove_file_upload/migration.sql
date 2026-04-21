-- Remove file upload / RAG ingestion table (starter uses vector store API only; add your own ingestion).

ALTER TABLE "files" DROP CONSTRAINT IF EXISTS "files_userId_fkey";
ALTER TABLE "files" DROP CONSTRAINT IF EXISTS "files_workspaceId_fkey";

DROP TABLE IF EXISTS "files";

DROP TYPE IF EXISTS "FileType";
DROP TYPE IF EXISTS "FileStatus";
