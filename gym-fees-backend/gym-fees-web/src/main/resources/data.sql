INSERT INTO members(id, full_name, email, mobile, photo_url, notes, archived, created_at) VALUES
  ('11111111-1111-1111-1111-111111111111', 'John Doe', 'john@example.com', '1234567890', NULL, NULL, false, CURRENT_TIMESTAMP);

INSERT INTO packages(id, name, duration_months, base_fee) VALUES
  (1, 'Standard', 1, 50.0),
  (2, 'Premium', 3, 140.0);

INSERT INTO subscriptions(id, member_id, package_id, start_date, end_date, agreed_fee, status) VALUES
  ('22222222-2222-2222-2222-222222222222', '11111111-1111-1111-1111-111111111111', 1, CURRENT_DATE, CURRENT_DATE + INTERVAL '1 month', 50.0, 'ACTIVE');

INSERT INTO payments(id, subscription_id, paid_amount, paid_on, refunded_amount, refund_reason) VALUES
  ('33333333-3333-3333-3333-333333333333', '22222222-2222-2222-2222-222222222222', 50.0, CURRENT_DATE, NULL, NULL);
