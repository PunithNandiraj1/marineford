address 0x1::CrowdFunding {

module CrowdFunding {
    use 0x1::Vector;
    use 0x1::LibraTimestamp;

    struct Campaign {
        owner: address,
        title: vector<u8>,
        description: vector<u8>,
        target: u64,
        deadline: u64,
        amount_collected: u64,
        image: vector<u8>,
        donators: vector<address>,
        donations: vector<u64>,
    }

    public fun create_campaign(
        owner: address,
        title: vector<u8>,
        description: vector<u8>,
        target: u64,
        deadline: u64,
        image: vector<u8>
    ): u64 acquires Campaign {
        let campaign = Campaign {
            owner: owner,
            title: title,
            description: description,
            target: target,
            deadline: deadline,
            amount_collected: 0,
            image: image,
            donators: Vector::empty<address>(),
            donations: Vector::empty<u64>(),
        };

        // Assuming a global vector to hold all campaigns
        let campaigns = global<CampaignVector>(0x1::CROWDFUNDING_CAMPAIGNS);
        let index = Vector::length(&campaigns);
        Vector::push_back(&mut campaigns, campaign);

        index
    }

    public fun donate_to_campaign(
        campaign_id: u64,
        amount: u64
    ) acquires Campaign {
        let campaigns = global<CampaignVector>(0x1::CROWDFUNDING_CAMPAIGNS);
        let campaign = Vector::borrow(&campaigns, campaign_id);

        // Assuming a simple transfer mechanism for the sake of illustration
        Transaction::pay_from_sender(copy campaign.owner, amount);

        Vector::push_back(&mut campaign.donators, Transaction::sender());
        Vector::push_back(&mut campaign.donations, amount);

        campaign.amount_collected = campaign.amount_collected + amount;
    }

    public fun get_donators(
        campaign_id: u64
    ): (vector<address>, vector<u64>) acquires Campaign {
        let campaigns = global<CampaignVector>(0x1::CROWDFUNDING_CAMPAIGNS);
        let campaign = Vector::borrow(&campaigns, campaign_id);

        (copy campaign.donators, copy campaign.donations)
    }

    public fun get_campaign(id: u64): Campaign acquires Campaign {
        let campaigns = global<CampaignVector>(0x1::CROWDFUNDING_CAMPAIGNS);
        Vector::borrow(&campaigns, id)
    }
}
}