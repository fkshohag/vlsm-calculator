# VLSM-Calculator using React

Variable Length Subnet Mask (VLSM) is a subnet -- a segmented piece of a larger network -- design strategy where all subnet masks can have varying sizes. This process of "subnetting subnets" enables network engineers to use multiple masks for different subnets of a single class A, B or C network.

## App: [VLSM-calculator](https://vlsm-calculator-7q299708i-fkshohag.vercel.app)

## Workflow:

1. Enter ISP has provided network IP in (a.b.c.d/mask) format, which is known as CIDR format.
2. Enter the Host Group information For example:
   - CSE (100 devices)
   - BBA (34 devices)
   - EEE (56 devices)
3. Click Calculate Subnect Allocation button to get the allocation result in terms of {Network IP, First Host IP, Last Host IP, Broadcast IP} for every group.
