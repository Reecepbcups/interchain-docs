---
title: Pending
sidebar_label: Pending Packets
sidebar_position: 1
slug: /ibc/pending-packets
---

## Hermes Pending Packets

When trying to clear stuck packets, you may notice packets continue to be pending with the following error

> pulled packet data for 0 events out of 1 sequences

Clear Logs

```text
2024-07-09T20:47:42.598508Z  INFO ThreadId(01) running Hermes v1.9.0+a026d661-dirty
2024-07-09T20:47:43.085646Z  INFO ThreadId(01) relay_recv_packet_and_timeout_messages{src_chain=evmos_9001-2 src_port=transfer src_channel=channel-64 dst_chain=noble-1}: 1 unreceived packets found: [ 1518 ]
2024-07-09T20:47:43.574103Z  INFO ThreadId(01) relay_recv_packet_and_timeout_messages{src_chain=evmos_9001-2 src_port=transfer src_channel=channel-64 dst_chain=noble-1}: pulled packet data for 0 events out of 1 sequences: 1518..=1518; events.total=1 events.left=0
SUCCESS []
```

Debug Mode Logs
```
2024-07-09T20:46:37.235822Z  INFO ThreadId(251) worker.batch{chain=evmos_9001-2}:supervisor.handle_batch{chain=
evmos_9001-2}:supervisor.process_batch{chain=evmos_9001-2}:worker.packet.cmd{src_chain=evmos_9001-2 src_port=tr
ansfer src_channel=channel-64 dst_chain=noble-1}: clearing packets
2024-07-09T20:46:37.297622Z DEBUG ThreadId(251) worker.batch{chain=evmos_9001-2}:supervisor.handle_batch{chain=
evmos_9001-2}:supervisor.process_batch{chain=evmos_9001-2}:worker.packet.cmd{src_chain=evmos_9001-2 src_port=tr
ansfer src_channel=channel-64 dst_chain=noble-1}:schedule_packet_clearing{height=Some(Height { revision: 2, hei
ght: 22039300 })}:relay_pending_packets{height=Some(Height { revision: 2, height: 22039299 })}:schedule_recv_pa
cket_and_timeout_msgs{query_height=2-22039299}: sequence numbers of unreceived packets to send to the destinati
on chain out of the ones with commitments on the source chain dst_chain=noble-1 src_chain=evmos_9001-2 total=1
sequences=1518..=1518
2024-07-09T20:46:38.030436Z  INFO ThreadId(251) worker.batch{chain=evmos_9001-2}:supervisor.handle_batch{chain=
evmos_9001-2}:supervisor.process_batch{chain=evmos_9001-2}:worker.packet.cmd{src_chain=evmos_9001-2 src_port=tr
ansfer src_channel=channel-64 dst_chain=noble-1}:schedule_packet_clearing{height=Some(Height { revision: 2, hei
ght: 22039300 })}:relay_pending_packets{height=Some(Height { revision: 2, height: 22039299 })}:schedule_recv_pa
cket_and_timeout_msgs{query_height=2-22039299}: pulled packet data for 0 events out of 1 sequences: 1518..=1518; events.total=1 events.left=0
```

## Solution

The issue is that the node does not have the packet data anymore. This can be seen with the last line pulled packet data for 0 events out of 1 sequences. You will need an archive node to clear this packet, which are not usually made public. You can try to reach out to the chain team to see if they can provide you with one.
