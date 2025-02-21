/*
  # Create favorites table and policies

  1. New Tables
    - `favorites`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `tool_id` (text, not null)
      - `created_at` (timestamp with time zone)

  2. Security
    - Enable RLS on `favorites` table
    - Add policies for authenticated users to:
      - Read their own favorites
      - Create new favorites
      - Delete their own favorites
*/

CREATE TABLE IF NOT EXISTS favorites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  tool_id text NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, tool_id)
);

ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own favorites"
  ON favorites
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create favorites"
  ON favorites
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own favorites"
  ON favorites
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);