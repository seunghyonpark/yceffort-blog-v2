---
title: 블록체인 애플리케이션 분류
date: 2018-10-13 05:40:35
published: true
tags:
  - blockchain
description: "From Hype to Reality: A Taxonomy of Blockchain Applications
  [원문](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3250648)  ##
  Introduction  블록체인은 분산형 디지털 원장이며, 신뢰라는 문제를 특정 기관에서 알고리즘으로 전환하기 위한 고유한..."
category: blockchain
slug: /2018/10/12/a-taxonomy-of-blockchain-applications/
template: post
---
From Hype to Reality: A Taxonomy of Blockchain Applications

[원문](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3250648)

## Introduction

블록체인은 분산형 디지털 원장이며, 신뢰라는 문제를 특정 기관에서 알고리즘으로 전환하기 위한 고유한 가치를 가지고 있다. 블록체인이 기존 사업 모델과 이론에 미치는 미래의 영향은 스마트폰이나 인터넷의 발명과 유사할 수 있다. 따라서, 연구원들과 실무자들은 확립된 신뢰기반 사업 모델을 블록체인으로 대체하려는 시도로 블록체인에 뛰어 든다. 블록체인 주변에서 나타나고 있는 가능성은 블록체인이 금융 부문의 은행을 대체할 수 있음을 시사한다. 스마트계약을 사용하는 개인 또는 인터넷 기관 간의 컨트랙트를 지원하고 있으며 필수적인 기록물들을 관리하고 있다.

그러나 블록체인 기반 시스템을 개발하는 데 있어 당면과제는 기존 이점보다 더 크다.현재 대부분의 블록체인 프로젝트는 아이디어 단계에서 실무 단계로 이동할 수 없었다. 예를 들어, 우주 탐사(예: SpaceBIT) 또는 인공지능의 토큰화를 지원하기 위해 블록체인을 채택하는 것을 목표로 하는 프로젝트는 PoC를 해내지 못했다.범위가 좁은 블록체인 프로토타입은 블록체인 프로토콜의 확장성, 합의 메커니즘에 필요한 계산 리소스의 낭비, 사용자 추적성 및 부정 행위에 대한 네트워크 보호 결여와 관련된 문제를 경험하게 된다.현재, 실무자들은 시행착오 접근법에 기초한 PoC 및 시스템 설계를 계속 실험하고 있다.

블록체인 영역의 광범위한 연구는 블록체인 기반 시스템의 개발과 기술적 요소(예: 합의 메커니즘, 허가)와 애플리케이션(예: 금융 거래, 인터넷)의 다양성에 초점을 맞추고 있다. 광범위한 연구를 자세히 살펴보면, 블록체인 적용 영역의 다양성을 알 수 있다.예를 들어, 비트코인 네트워크는 신뢰가 필요하지 않은, 안전한 작업 증명 합의 메커니즘이 필요한 반면, HyperLedger 비즈니스 네트워크는 신뢰를 보장하고 실용적인 비잔틴 장애허용과 같은 보다 가벼운 합의 메커니즘을 사용할 수 있다.그러나 관련 기술 블록체인 특성은 여러 애플리케이션에 걸쳐 추상화, 단편화 및 분산되어 있습니다.

성공적인 블록체인 기반 시스템 개발에 관한 지침을 제공하기 위해서는 기술 블록체인 특성과 블록체인 애플리케이션을 연결하는 더 많은 지식이 필수적이다.시행착오 개발은 블록체인 기반의 시스템에 대한 미충족된 기대와 투자 손실로 이어진다. 따라서, 우리는 연구 질문에 답한다.어떤 특징을 가진 블록체인이 어떤 분야에 잘 들어 맞는가?

## 블록체인 분류

![taxonomy of blockchain applications](../images/taxonomy-of-blockchain-applications.png)

첫 번째 열은 'Reading Access'로 블록 체인의 정보를 읽는 여러 모드를 나타낸다.

- Pr(Private Reading)은 통해 권한이 부여된 구성원만 블록체인에 액세스할 수 있다.
- Pb(Public Reading)은 누구나 액세스를 통해 블록체인의 데이터를 읽을 수 있다.

두 번째 열은 'Writing Access' 이며 블록체인에 대한 다양한 쓰기 모드를 나타낸다.

- P(Permissioned)는 트랜잭션 작성을 위해 유저에게 권한을 요구한다.
- U(Unpermissioned)인 경우, 사용자는 트랜잭션을 추가하기 위한 별도의 권한이 필요하지 않다.

세 번째 열은 주요 합의 메커니즘이며, 블록체인을 갱신하기 위한 채택된 수단과 관련이 있다.우리는 네 가지 주요 합의 메커니즘에 초점을 맞춘다.

- W(Proof of Work) 작업 증명에는 요청자의 리소스(또는 작업)가 필요하다.대개 컴퓨터의 처리 시간을 계산적으로 어려운 퍼즐을 해결하기 위해 사용한다.
- S(Proof of stake) 지분증명은 사용자에게 특정 양의 디지털 데이터의 소유권을 입증하여 이 데이터에 대한 지분을 설정하도록 요청한다.
- B(Byzantine Fault Tolerance) 비잔티움 장애 허용은 시스템 수준 동의를 함께 결정하는 네트워크의 신뢰할 수 있는 노드에서 내린 개별 결정을 수집한다.
- SD(Self-developed Consensus)자체 개발한 합의 메커니즘은 일부 애플리케이션 사례에서 사용되며 일반적으로 시스템 수준 동의에 도달할 수 있는 몇 개의 신뢰도가 높은 노드를 포함한다.

네 번째 열은 익명성 수준이며 사용자가 신원과 일치할 수 있는지 여부를 평가한다.

- A(Anonymous) 익명인 경우 사용자는 블록 체인으로 작업할 데이터를 제공할 필요가 없습니다.
- P(Pseudonymous) 블록체인이 가명이면 사용자는 가명으로 작업해야 한다.
- I(Identifiable) 식별 가능한 특성을 가진 블록체인 경우 이메일 주소와 같은 개인 식별 가능 정보를 요청하거나 자동으로 수집하게 된다.

다섯번째 열은 이벤트 핸들링이며 블록체인이 애플리케이션 논리 또는 이벤트를 처리할 수 있는지 여부를 나타낸다.

- N(No Event)는 블록체인이 애플리케이션 로직을 처리할 수 없음을 보여 주지 않습니다.
- F(Fixed event)는 내장 이벤트를 지원합니다.
- C(Custom event) 사용자 정의 이벤트 처리란 블록체인이 사용자가 제공하는 모든 애플리케이션 로직 처리를 지원한다는 것을 의미한다.

여섯 번째 열은 블록체인에 대한 사용자 간의 정보 공유 유형에 초점을 맞추고 특성 거래와 내용을 포함하는 데이터 교환 유형이다.

- T(Transaction)트랜잭션은 실행된 작업의 로그 교환을 의미한다.
- C(Contents)콘텐츠는 문서, 메시지, 비디오 또는 음악 파일과 같은 디지털 자산이 교환되는 것을 의미한다.
 
일곱 번째 열은 암호화이며 블록 체인의 데이터가 암호화되는지 여부를 지정합니다.

- U(Unencrypted) 암호화되지 않음은 블록체인의 데이터가 암호화되지 않음을 의미한다.
- P(Partially-encrypted) 부분적으로 암호화된 블록체인을 나타냅니다.
- T(Totally-encrypted)완전 암호화는 블록체인의 모든 데이터가 암호화되고 모든 작업에 대해 해독되어야 함을 의미한다.
 
여덟 번째 열은 히스토리 보존이며 전체 블록체인 또는 최근 업데이트만 호스트 간에 유지 및 배포되었는지 확인한다.

- W(Whole retention)전체 보존은 유전자 블록으로 시작하는 전체 역사가 블록체인에 보관되어 노드 간에 분산된다는 것을 의미한다.
- R(Recent updates)최근 업데이트 보존은 최신 업데이트만 유지 및 배포되도록 지정한다.