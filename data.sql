-- Database should be prime_feedback

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "grade", "comments")
VALUES (4, 4, 5, 10, 'Doing Great!');

CREATE TABLE "questions" (
  "id" serial primary key,
  "question" text not null,
  "abbreviation" text not null,
  "required" boolean default false,
  "type" text not null
);

INSERT INTO "questions" ("question", "abbreviation","required", "type")
VALUES ('How are you feeling today?', 'feeling', true, 'rating'),
('How well are you understanding the content?', 'understanding', true, 'rating'),
('How well are you being supported?', 'supported', true, 'rating'),
('How well are you going to grade this assignment?', 'grade', true, 'rating'),
('Any additional comments?', 'comments', false, 'text');