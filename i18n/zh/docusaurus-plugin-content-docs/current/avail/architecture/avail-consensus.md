---
id: avail-consensus
title: 可拓展性区块链网络 (Avail) 的共识
sidebar_label: Consensus
description: 了解 Avail 的共识机制
keywords:
  - docs
  - polygon
  - avail
  - consensus
  - proof of stake
  - nominated proof of stake
  - pos
  - npos
image: https://wiki.polygon.technology/img/thumbnail/polygon-avail.png
slug: avail-consensus
---

# 可拓展性区块链网络 (Avail) 的共识 {#avail-s-consensus}

## 数据可用性委员会 {#data-availability-committees}

到目前为止，维持DA解决方案的方法通常通过发援会（数据提供委员会）来进行。发援会负责将签名发布回到主链上，并证明是否可获得脱链数据。

在 DAC 机制下，扩展解决方案依靠数据可用性委员会来达成 Validium。DACs的问题是，数据的可用性成为负责储存和真实报告数据的少数委员会成员的可信服务。

Avail 不是 DAC，而是拥有共识机制的实际区块链网络，拥有自己的验证者节点和区块生产者集合。

## 权益证明 {#proof-of-stake}

:::caution 当前的验证者

Avail 测试网发布之初，验证者将由Polygon 内部运营和维护。

:::

传统的利害关系证明要求区块生产作者在链上拥有代币持有（质点）的权益，以生产区块，而不是计算资源（工作）。

Polygon 产品使用 PoS（质疑证明）或修改 PoS。通常，拥有最多股份的传统 PoS 系统的验证者对网络的影响和控制最多。

拥有许多网络维护者的系统往往形成脱链池，通过减少奖励变异来最大限度地提高资本收益。当集合在链上包含时，这一集中化挑战可以缓解，让代币持有人支持他们认为最好的代表网络维护者和网络利益的网络维护者。这还分配验证者权力集中，假定拥有正确的投票和选举机制，因为网络上的整体利害关系被分配为一对多或多对多的关系，而不只依赖于一对一的关系，在这种关系中，信任被交付于“最高质档”验证者。

这种权益证明的修改可以通过授权或提名来管理，通常称为DPOS（授权的权益证明）或NPOS（指定权益证明）。Polygon 缩放解决方案已经调整了这些增强机制，包括 Polygon 提供。

Avail 采用提名权益证明，并对区块验证进行了修改。参与的参与者仍是验证者和提名者。

轻量级客户端还可以提高 Avail 上的数据可用性。提供者的共识要求三分之二加1的验证者就有效性达成共识。

## 提名者 {#nominators}

提名者可以选择支持一组候选人 Avail 验证者，使用权益。提名者将提名他们认为有效提供数据的验证者。

## DPOS和NPOS之间的差异 {#difference-between-dpos-and-npos}

在面值上，授权和提名似乎是相同的动作，特别是从一个狂热的存储者角度来看。然而，差异在于基本的共识机制和验证者选择的方式。

在DPOS中，以投票为中心的选举系统确定了固定数量的验证者来保安网络。授权者可以将其股份转交给候选人网络验证者，使用它作为投票权支持代表。授权者通常在最高质上支持验证者，因为质上质上。拥有最多票数的代表成为网络的验证者，并可以核查交易。在使用其股份作为投票权时，在“提供”上，如果选出的验证者表现恶意，他们不会通过削减来受到后果。在其他 DPOS 系统中，授权者可能会受到削减。

在NPOS中，授权者转变为提名者，以类似的方式使用其股份，提名潜在的验证者来确保网络的安全。Scake 锁定在链上，与 DPoS 相反，提名者会根据其提名的潜在恶意行为进行削减。在这方面，NPOS是一个更积极主动的转账机制，而不是“设置和忘记”的转账机制，因为提名者要注意表现良好和可持续验证者。这也鼓励验证者创建强有力的验证者操作，以吸引和维持提名。