CREATE TABLE members (
    id UUID PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    mobile VARCHAR(50),
    photo_url VARCHAR(255),
    notes VARCHAR(255),
    archived BOOLEAN NOT NULL,
    created_at TIMESTAMP
);

CREATE TABLE packages (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    duration_months INT NOT NULL,
    base_fee DECIMAL(10,2) NOT NULL
);

CREATE TABLE subscriptions (
    id UUID PRIMARY KEY,
    member_id UUID NOT NULL,
    package_id INT NOT NULL,
    start_date DATE,
    end_date DATE,
    agreed_fee DECIMAL(10,2),
    status VARCHAR(20),
    CONSTRAINT fk_subscription_member FOREIGN KEY (member_id)
        REFERENCES members(id),
    CONSTRAINT fk_subscription_package FOREIGN KEY (package_id)
        REFERENCES packages(id)
);

CREATE TABLE payments (
    id UUID PRIMARY KEY,
    subscription_id UUID NOT NULL,
    paid_amount DECIMAL(10,2),
    paid_on DATE,
    refunded_amount DECIMAL(10,2),
    refund_reason VARCHAR(255),
    FOREIGN KEY (subscription_id) REFERENCES subscriptions(id)
);
