(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const motionLink = document.createElement('link');
  motionLink.rel = 'stylesheet';
  motionLink.href = 'assets/motion.css?v=20261122';
  document.head.appendChild(motionLink);

  const homeCopy = {
    en: {
      nav:['Home','About MSIC','Industries','Equipment','Services','Solutions','Projects','Resources','Contact'],
      eyebrow:'Kolwezi · Lualaba · DRC',
      title:'Keeping mining operations moving.',
      sub:'Your technical partner for mining maintenance, equipment repair, industrial services and field support.',
      actions:['Explore our services','Technical assessment'],
      scroll:'SCROLL',
      introKicker:'MSIC at a glance', introTitle:'Technical expertise. Industrial understanding. Operational support.', introLead:'A Congolese company based in Kolwezi, MSIC supports mining and industrial operations through multidisciplinary maintenance, repair, fabrication, supply and technical assistance.', introLink:'Discover MSIC',
      introCards:['Maintenance & repair','Technical field support','Industrial fabrication','Equipment & components','Industrial supply','Technical assistance'],
      challengeKicker:'Operational environment', challengeTitle:'We understand what keeps mining operations running.', challengeLead:'Every operational challenge requires a precise understanding of the equipment, site, safety and production priorities.',
      challengeCards:[
        ['Unexpected downtime','Impact: production losses and urgent resource mobilisation.','Services: diagnostics, troubleshooting, corrective maintenance and field interventions.','View solution'],
        ['Hydraulic failures','Impact: equipment immobilisation, unstable pressure, leaks or loss of force.','Services: cylinders, pumps, hoses, fittings and circuit inspection.','View solution'],
        ['Engines & transmissions','Impact: power loss, vibration or drivetrain failure.','Services: diesel engines, gearboxes, axle assemblies and differentials.','View solution'],
        ['Wear & structural damage','Impact: component weakening and risk of prolonged shutdown.','Services: buckets, welding, reinforcement, line boring and machining.','View solution'],
        ['Maintenance backlog','Impact: delayed work, unclear priorities and insufficient preparation.','Services: planning, work orders, monitoring and targeted interventions.','View solution'],
        ['Parts & manpower','Impact: waiting time and difficulty mobilising the required skills.','Services: supply, technical assistance and mobile maintenance teams.','View solution']
      ],
      industryKicker:'Industries supported', industryTitle:'Expertise adapted to the realities of every operation.', industryLink:'View all industries',
      industries:[['Mining operators','Asset availability, preventive maintenance and field support.'],['Mining contractors','Technical support for equipment engaged in production cycles.'],['Processing plants','Industrial maintenance, components and targeted technical support.'],['Exploration','Technical requirements for operations under development.'],['EPC / EPCM','Technical packages, fabrication, civil works and coordination.'],['Industrial companies','Maintenance, supplies and solutions for demanding environments.']],
      capabilityKicker:'Technical capabilities', capabilityTitle:'Twelve areas of expertise. One technical team.', capabilityLead:'MSIC organises its capabilities around assets, systems and operational risks.',
      capabilities:['Mechanical maintenance','Hydraulic systems','Diesel engine overhaul','Transmission & drivetrains','Welding & fabrication','Machining & line boring','Electrical & automation','Civil works & earthmoving','Equipment rental','Industrial supply','Technical assistance','Field maintenance'],
      equipmentKicker:'Equipment directory', equipmentTitle:'Equipment we support.', equipmentLink:'Search for equipment',
      equipment:[['Hydraulic excavators','Hydraulics · tracks · structure'],['Mining haul trucks','Engine · braking · transmission'],['Bulldozers','Tracks · blade · ripper'],['Motor graders','Linkages · hydraulics · blade'],['Wheel loaders','Chassis · boom · work equipment'],['Pumps & compressors','Motors · seals · circuits'],['Diesel engines','Diagnostics · overhaul · testing'],['Hydraulic cylinders','Rods · barrels · seals'],['Gearboxes & differentials','Gears · bearings · shafts']],
      processKicker:'Intervention process', processTitle:'A clear technical sequence, from assessment to reporting.',
      process:[['Assess','Context, requirements and operational constraints.'],['Diagnose','Technical findings and inspection points.'],['Plan','Resources, method and preparation.'],['Mobilise','Team, equipment and supplies.'],['Execute','Work within the validated scope.'],['Verify','Quality controls and required tests.'],['Report','Traceability, findings and observations.']],
      peopleKicker:'Our team', peopleTitle:'Our people are our technical strength.', peopleLead:'Mechanical and hydraulic technicians, diesel specialists, welders, fabricators, industrial technicians, field teams and supervisors coordinate their skills according to each assignment.',
      people:['Mechanical technicians','Hydraulic technicians','Diesel engine specialists','Welders & fabricators','Industrial technicians','Field maintenance teams','Technical supervisors'],
      projectKicker:'Experience to document', projectTitle:'A portfolio built on verifiable projects.', projectLead:'Real references and verified results will be published only after documentary validation.', projectStatus:'Case study coming soon', projectName:'Heavy component overhaul', projectFields:['Project','Location','Sector','Equipment','Operational challenge','Technical intervention','Deliverables','Verified results'], projectValues:['Title to document','To be confirmed','To be confirmed','To be confirmed','To document','Scope to confirm','To confirm','To document'],
      offerKicker:'Commercial solutions', offerTitle:'Technical support built around your operational needs.',
      offers:[['01','One-time technical interventions','For: a customer with a clearly identified requirement.','Service: assessment, diagnostics, repair or targeted work.'],['02','On-site maintenance support','For: operations requiring temporary technical reinforcement.','Service: teams, intervention tracking and on-demand assistance.'],['03','Recurring maintenance partnerships','For: companies seeking a structured support relationship.','Service: planning, targeted maintenance and agreed reporting.'],['04','Industrial project contracts','For: projects requiring several combined technical packages.','Service: scope, schedule, resources, parts and tailored reporting.']], quote:'Request a quotation',
      safetyKicker:'HSE & quality', safetyTitle:'Safety, method, traceability and quality.', safetyLead:'Work preparation, risk assessment, technical inspections and documentation are integrated into every assignment.',
      safety:['Work preparation','Risk assessment','Suitable PPE','Technical inspection','Quality verification','Documentation','Continuous improvement','Certificates to be provided'], documentTitle:'Document zone', documentSub:'Certificates · procedures · references', documentText:'To be completed upon receipt of validated documents.',
      finalKicker:'Let’s discuss your requirement', finalTitle:'Let’s discuss your next mining or industrial requirement.', finalLead:'From technical interventions to long-term maintenance partnerships, MSIC is ready to understand your operational requirements.', finalActions:['Request a technical assessment','Contact our team'],
      footer:['Navigation','Services','Main services','Contact','Maintenance & repair','Hydraulics & components','Fabrication & machining','Field support','Commercial details to be completed','Coordinates to be completed','All rights reserved']
    },
    zh: {
      nav:['首页','关于 MSIC','行业','设备','服务','解决方案','项目','资源','联系我们'], eyebrow:'科卢韦齐 · 卢阿拉巴 · 刚果（金）', title:'让矿业运营持续高效运转。', sub:'助力矿业维护、设备维修、工业服务及现场支持的专业技术合作伙伴。', actions:['了解我们的服务','申请技术评估'], scroll:'向下滚动',
      introKicker:'关于 MSIC', introTitle:'技术专长。工业洞察。运营支持。', introLead:'MSIC 是一家总部位于科卢韦齐的刚果公司，为矿业和工业运营提供维护、维修、制造、供应及技术支持等多学科服务。', introLink:'了解 MSIC', introCards:['维护与维修','现场技术支持','工业制造','设备与部件','工业供应','技术援助'],
      challengeKicker:'运营环境', challengeTitle:'我们深知维持矿业运营持续运行的关键。', challengeLead:'每项运营挑战都需要准确理解设备、现场、安全与生产优先事项。',
      challengeCards:[
        ['突发设备停机','影响：造成生产损失，并需要紧急调配资源。','服务：诊断、故障排除、纠正性维护及现场干预。','查看解决方案'],['液压系统故障','影响：设备停滞、压力不稳、泄漏或动力下降。','服务：液压缸、泵、软管、接头及回路检查。','查看解决方案'],['发动机与传动系统','影响：动力下降、振动或动力传动链故障。','服务：柴油发动机、变速箱、桥箱及差速器。','查看解决方案'],['磨损与结构损伤','影响：部件弱化并可能导致长时间停机。','服务：铲斗、焊接、加固、在线镗孔及机加工。','查看解决方案'],['维护积压','影响：工作延误、优先级不明确及准备不足。','服务：维护规划、工单、跟踪及针对性干预。','查看解决方案'],['备件与技术人员','影响：等待时间延长，难以及时调集所需技能。','服务：工业供应、技术支持及移动维护团队。','查看解决方案']],
      industryKicker:'服务行业', industryTitle:'根据每种运营需求量身定制的专业支持。', industryLink:'查看全部行业', industries:[['矿业运营商','资产可用性、预防性维护及现场支持。'],['矿业承包商','为生产周期中的设备提供技术支持。'],['选矿与加工厂','工业维护、部件及针对性技术支持。'],['勘探公司','为在建和勘探运营提供技术支持。'],['EPC / EPCM 承包商','技术包、制造、土建及协调支持。'],['工业企业','面向高要求环境的维护、供应与解决方案。']],
      capabilityKicker:'技术能力', capabilityTitle:'十二项技术专长，统一的技术团队。', capabilityLead:'MSIC 围绕设备资产、系统及运营风险组织技术能力。', capabilities:['机械维护','液压系统','柴油发动机大修','传动与动力系统','焊接与制造','机加工与在线镗孔','电气与自动化','土建与土方工程','设备租赁','工业供应','技术咨询','现场维护'],
      equipmentKicker:'设备目录', equipmentTitle:'我们支持的设备。', equipmentLink:'搜索设备', equipment:[['液压挖掘机','液压 · 履带 · 结构'],['矿用自卸卡车','发动机 · 制动 · 传动'],['推土机','履带 · 铲刀 · 松土器'],['平地机','铰接机构 · 液压 · 铲刀'],['轮式装载机','底盘 · 工作臂 · 作业装置'],['泵与压缩机','电机 · 密封 · 回路'],['柴油发动机','诊断 · 大修 · 测试'],['液压油缸','活塞杆 · 缸筒 · 密封'],['变速箱与差速器','齿轮 · 轴承 · 轴']],
      processKicker:'干预流程', processTitle:'从评估到报告，流程清晰可控。', process:[['评估','了解背景、需求及运营限制。'],['诊断','现场技术判断及检查点。'],['计划','资源、方法及准备工作。'],['动员','人员、设备及物资准备。'],['执行','按确认范围实施工作。'],['验证','质量控制及必要测试。'],['报告','形成完整的工作记录与发现。']],
      peopleKicker:'我们的团队', peopleTitle:'专业人员是我们的技术核心。', peopleLead:'机械与液压技术员、柴油专家、焊工、制造人员、工业技术员、现场维护团队及技术主管，将根据项目需求协调协作。', people:['机械技术员','液压技术员','柴油发动机专家','焊接与制造人员','工业技术员','现场维护团队','技术主管'],
      projectKicker:'待核实经验', projectTitle:'项目组合建立在可核实的成果之上。', projectLead:'真实参考及核实结果仅在文件确认后发布。', projectStatus:'案例即将发布', projectName:'大型部件大修', projectFields:['项目','地点','行业','设备','运营挑战','技术干预','交付成果','核实结果'], projectValues:['待填写','待确认','待确认','待确认','待填写','待确认','待确认','待填写'],
      offerKicker:'商业解决方案', offerTitle:'围绕您的运营需求提供技术支持。', offers:[['01','一次性技术干预','适用对象：需求明确的企业。','服务：评估、诊断、维修或针对性工作。'],['02','现场维护支持','适用对象：需要临时技术力量的运营。','服务：人员、干预跟踪及按需支持。'],['03','长期维护合作','适用对象：希望建立持续支持关系的企业。','服务：规划、针对性维护及约定报告。'],['04','工业项目合同','适用对象：需要多个技术工作包的项目。','服务：范围、进度、资源、备件及定制报告。']], quote:'申请报价',
      safetyKicker:'HSE 与质量', safetyTitle:'安全、方法、可追溯性与质量。', safetyLead:'工作准备、风险评估、技术检查及文件记录均纳入每项干预范围。', safety:['工作准备','风险评估','适用个人防护装备','技术检查','质量验证','文件记录','持续改进','待提供认证'], documentTitle:'文件专区', documentSub:'认证 · 程序 · 参考资料', documentText:'收到并确认文件后再进行补充。',
      finalKicker:'讨论您的需求', finalTitle:'讨论您的下一项矿业或工业需求。', finalLead:'无论是技术干预还是长期维护合作，MSIC 都准备深入了解您的运营需求。', finalActions:['申请技术评估','联系我们'], footer:['导航','服务','主要服务','联系我们','维护与维修','液压与部件','制造与机加工','现场支持','商业联系方式待补充','地址及联系方式待补充','版权所有']
    },
    fr: {
      nav:['Accueil','À propos de MSIC','Industries','Équipement','Services','Solutions','Projets','Ressources','Contact'],
      eyebrow:'Kolwezi · Lualaba · RDC',
      title:'Maintenir les opérations minières en mouvement.',
      sub:'Votre partenaire technique pour la maintenance minière, la réparation d\'équipement, les services industriels et le soutien sur le terrain.',
      actions:['Découvrez nos services','Évaluation technique'],
      scroll:'DÉFILER',
      introKicker:'MSIC en un coup d\'œil', introTitle:'Expertise technique. Compréhension industrielle. Soutien opérationnel.', introLead:'Une entreprise congolaise basée à Kolwezi, MSIC soutient les opérations minières et industrielles à travers la maintenance, la réparation, la fabrication, l\'approvisionnement et l\'assistance technique multidisciplinaire.', introLink:'Découvrez MSIC',
      introCards:['Maintenance & réparation','Soutien technique sur le terrain','Fabrication industrielle','Équipement & composants','Approvisionnement industriel','Assistance technique'],
      challengeKicker:'Environnement opérationnel', challengeTitle:'Nous comprenons ce qui maintient les opérations minières en marche.', challengeLead:'Chaque défi opérationnel nécessite une compréhension précise de l\'équipement, du site, de la sécurité et des priorités de production.',
      challengeCards:[
        ['Temps d\'arrêt imprévu','Impact : pertes de production et mobilisation urgente de ressources.','Services : diagnostics, dépannage, maintenance corrective et interventions sur le terrain.','Voir la solution'],
        ['Pannes hydrauliques','Impact : immobilisation de l\'équipement, pression instable, fuites ou perte de force.','Services : vérins, pompes, tuyaux, raccords et inspection de circuit.','Voir la solution'],
        ['Moteurs & transmissions','Impact : perte de puissance, vibration ou défaillance de la transmission.','Services : moteurs diesel, boîtes de vitesses, ensembles de ponts et différentiels.','Voir la solution'],
        ['Usure & dommages structurels','Impact : affaiblissement des composants et risque d\'arrêt prolongé.','Services : godets, soudage, renforcement, alésage en ligne et usinage.','Voir la solution'],
        ['Arriéré de maintenance','Impact : travaux retardés, priorités floues et préparation insuffisante.','Services : planification, ordres de travail, suivi et interventions ciblées.','Voir la solution'],
        ['Pièces & main-d\'œuvre','Impact : temps d\'attente et difficulté à mobiliser les compétences requises.','Services : approvisionnement, assistance technique et équipes de maintenance mobiles.','Voir la solution']
      ],
      industryKicker:'Industries soutenues', industryTitle:'Expertise adaptée aux réalités de chaque opération.', industryLink:'Voir toutes les industries',
      industries:[['Opérateurs miniers','Disponibilité des actifs, maintenance préventive et soutien sur le terrain.'],['Entrepreneurs miniers','Soutien technique pour les équipements engagés dans les cycles de production.'],['Usines de traitement','Maintenance industrielle, composants et soutien technique ciblé.'],['Exploration','Exigences techniques pour les opérations en développement.'],['EPC / EPCM','Packages techniques, fabrication, travaux civils et coordination.'],['Entreprises industrielles','Maintenance, fournitures et solutions pour des environnements exigeants.']],
      capabilityKicker:'Capacités techniques', capabilityTitle:'Douze domaines d\'expertise. Une équipe technique.', capabilityLead:'MSIC organise ses capacités autour des actifs, des systèmes et des risques opérationnels.',
      capabilities:['Maintenance mécanique','Systèmes hydrauliques','Révision de moteurs diesel','Transmission & groupes motopropulseurs','Soudage & fabrication','Usinage & alésage en ligne','Électricité & automatisation','Travaux civils & terrassement','Location d\'équipement','Approvisionnement industriel','Assistance technique','Maintenance sur site'],
      equipmentKicker:'Annuaire des équipements', equipmentTitle:'Équipements que nous soutenons.', equipmentLink:'Rechercher du matériel',
      equipment:[['Excavatrices hydrauliques','Hydraulique · chenilles · structure'],['Camions-bennes miniers','Moteur · freinage · transmission'],['Bulldozers','Chenilles · lame · arracheuse'],['Niveleuses','Liaisons · hydraulique · lame'],['Chargeurs sur pneus','Châssis · bras · équipement de travail'],['Pompes & compresseurs','Moteurs · joints · circuits'],['Moteurs diesel','Diagnostics · révision · essais'],['Cylindres hydrauliques','Barres · cylindres · joints'],['Boîtes de vitesses & différentiels','Engrenages · roulements · arbres']],
      processKicker:'Processus d\'intervention', processTitle:'Une séquence technique claire, de l\'évaluation au rapport.',
      process:[['Évaluer','Contexte, exigences et contraintes opérationnelles.'],['Diagnostiquer','Constats techniques et points d\'inspection.'],['Planifier','Ressources, méthode et préparation.'],['Mobiliser','Équipe, équipement et fournitures.'],['Exécuter','Travail dans le cadre du périmètre validé.'],['Vérifier','Contrôles de qualité et tests requis.'],['Rapporter','Traçabilité, constatations et observations.']],
      peopleKicker:'Notre équipe', peopleTitle:'Notre personnel est notre force technique.', peopleLead:'Les techniciens mécaniques et hydrauliques, les spécialistes des moteurs diesel, les soudeurs, les fabricants, les techniciens industriels, les équipes sur le terrain et les superviseurs coordonnent leurs compétences en fonction de chaque mission.',
      people:['Techniciens mécaniques','Techniciens hydrauliques','Spécialistes des moteurs diesel','Soudeurs & fabricants','Techniciens industriels','Équipes de maintenance sur site','Superviseurs techniques'],
      projectKicker:'Expérience à documenter', projectTitle:'Un portefeuille construit sur des projets vérifiables.', projectLead:'De vraies références et des résultats vérifiés ne seront publiés qu\'après validation documentaire.', projectStatus:'Étude de cas à venir', projectName:'Révision de composants lourds', projectFields:['Projet','Emplacement','Secteur','Équipement','Défi opérationnel','Intervention technique','Livrables','Résultats vérifiés'], projectValues:['Titre à documenter','À confirmer','À confirmer','À confirmer','À documenter','Portée à confirmer','À confirmer','À documenter'],
      offerKicker:'Solutions commerciales', offerTitle:'Soutien technique construit autour de vos besoins opérationnels.',
      offers:[['01','Interventions techniques ponctuelles','Pour : un client avec un besoin clairement identifié.','Service : évaluation, diagnostics, réparation ou travaux ciblés.'],['02','Soutien à la maintenance sur site','Pour : opérations nécessitant un renfort technique temporaire.','Service : équipes, suivi des interventions et assistance à la demande.'],['03','Partenariats de maintenance récurrents','Pour : entreprises cherchant une relation de soutien structurée.','Service : planification, maintenance ciblée et reporting convenu.'],['04','Contrats de projets industriels','Pour : projets nécessitant plusieurs packages techniques combinés.','Service : périmètre, calendrier, ressources, pièces et reporting sur mesure.']], quote:'Demander un devis',
      safetyKicker:'SST & qualité', safetyTitle:'Sécurité, méthode, traçabilité et qualité.', safetyLead:'La préparation du travail, l\'évaluation des risques, les inspections techniques et la documentation sont intégrées dans chaque mission.',
      safety:['Préparation du travail','Évaluation des risques','EPI appropriés','Inspection technique','Vérification de la qualité','Documentation','Amélioration continue','Certificats à fournir'], documentTitle:'Zone documentaire', documentSub:'Certificats · procédures · références', documentText:'À compléter à la réception des documents validés.',
      finalKicker:'Discutons de votre besoin', finalTitle:'Discutons de votre prochain besoin minier ou industriel.', finalLead:'Des interventions techniques aux partenariats de maintenance à long terme, MSIC est prêt à comprendre vos exigences opérationnelles.', finalActions:['Demander une évaluation technique','Contacter notre équipe'],
      footer:['Navigation','Services','Services principaux','Contact','Maintenance & réparation','Hydraulique & composants','Fabrication & usinage','Soutien sur site','Coordonnées à compléter','Tous droits réservés']
    }
  };

  document.querySelectorAll('[data-lang]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-lang]').forEach(other => other.classList.toggle('active', other === button));
      document.documentElement.lang = button.dataset.lang === 'zh' ? 'zh-CN' : button.dataset.lang;

      const copy = homeCopy[document.documentElement.lang];

      document.title = copy.title;

      document.querySelectorAll('.nav-item').forEach((item, index) => {
        item.querySelector('a').textContent = copy.nav[index];
      });

      document.querySelector('.hero-eyebrow').textContent = copy.eyebrow;
      document.querySelector('.hero-title').innerHTML = copy.title.split(' ').map(word => `<span class="hero-word">${word}</span>`).join(' ');
      document.querySelector('.hero-subtitle').textContent = copy.sub;
      document.querySelector('.hero-actions').innerHTML = copy.actions.map(action => `<a href="#" class="btn btn-primary">${action}</a>`).join('');

      document.querySelector('.scroll-cue span').textContent = copy.scroll;

      document.querySelector('.intro-kicker').textContent = copy.introKicker;
      document.querySelector('.intro-title').textContent = copy.introTitle;
      document.querySelector('.intro-lead').textContent = copy.introLead;
      document.querySelector('.intro-link').textContent = copy.introLink;

      const introCardsContainer = document.querySelector('.intro-cards');
      introCardsContainer.innerHTML = '';
      copy.introCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'intro-card';
        cardElement.innerHTML = `<h3 class="intro-card-title">${card}</h3>`;
        cardElement.style.transitionDelay = `${index * 50}ms`;
        introCardsContainer.appendChild(cardElement);
      });

      document.querySelector('.challenge-kicker').textContent = copy.challengeKicker;
      document.querySelector('.challenge-title').textContent = copy.challengeTitle;
      document.querySelector('.challenge-lead').textContent = copy.challengeLead;

      const challengeCardsContainer = document.querySelector('.challenge-cards');
      challengeCardsContainer.innerHTML = '';
      copy.challengeCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'challenge-card';
        cardElement.innerHTML = `
          <h4 class="challenge-card-title">${card[0]}</h4>
          <p class="challenge-card-impact">${card[1]}</p>
          <p class="challenge-card-services">${card[2]}</p>
          <a href="#" class="challenge-card-link">${card[3]}</a>
        `;
        cardElement.style.transitionDelay = `${index * 55}ms`;
        challengeCardsContainer.appendChild(cardElement);
      });

      document.querySelector('.industry-kicker').textContent = copy.industryKicker;
      document.querySelector('.industry-title').textContent = copy.industryTitle;

      const industriesList = document.querySelector('.industries-list');
      industriesList.innerHTML = '';
      copy.industries.forEach(industry => {
        const industryElement = document.createElement('li');
        industryElement.className = 'industry-item';
        industryElement.textContent = industry[0];
        industriesList.appendChild(industryElement);
      });

      document.querySelector('.capability-kicker').textContent = copy.capabilityKicker;
      document.querySelector('.capability-title').textContent = copy.capabilityTitle;

      const capabilitiesList = document.querySelector('.capabilities-list');
      capabilitiesList.innerHTML = '';
      copy.capabilities.forEach(capability => {
        const capabilityElement = document.createElement('li');
        capabilityElement.className = 'capability-item';
        capabilityElement.textContent = capability;
        capabilitiesList.appendChild(capabilityElement);
      });

      document.querySelector('.equipment-kicker').textContent = copy.equipmentKicker;
      document.querySelector('.equipment-title').textContent = copy.equipmentTitle;

      const equipmentList = document.querySelector('.equipment-list');
      equipmentList.innerHTML = '';
      copy.equipment.forEach(equipment => {
        const equipmentElement = document.createElement('li');
        equipmentElement.className = 'equipment-item';
        equipmentElement.textContent = equipment[0];
        equipmentList.appendChild(equipmentElement);
      });

      document.querySelector('.process-kicker').textContent = copy.processKicker;
      document.querySelector('.process-title').textContent = copy.processTitle;

      const processList = document.querySelector('.process-list');
      processList.innerHTML = '';
      copy.process.forEach(step => {
        const stepElement = document.createElement('li');
        stepElement.className = 'process-step';
        stepElement.innerHTML = `<strong>${step[0]}:</strong> ${step[1]}`;
        processList.appendChild(stepElement);
      });

      document.querySelector('.people-kicker').textContent = copy.peopleKicker;
      document.querySelector('.people-title').textContent = copy.peopleTitle;

      const peopleList = document.querySelector('.people-list');
      peopleList.innerHTML = '';
      copy.people.forEach(person => {
        const personElement = document.createElement('li');
        personElement.className = 'people-item';
        personElement.textContent = person;
        peopleList.appendChild(personElement);
      });

      document.querySelector('.project-kicker').textContent = copy.projectKicker;
      document.querySelector('.project-title').textContent = copy.projectTitle;

      const projectList = document.querySelector('.project-list');
      projectList.innerHTML = '';
      copy.projects.forEach(project => {
        const projectElement = document.createElement('li');
        projectElement.className = 'project-item';
        projectElement.textContent = project;
        projectList.appendChild(projectElement);
      });

      document.querySelector('.offer-kicker').textContent = copy.offerKicker;
      document.querySelector('.offer-title').textContent = copy.offerTitle;

      const offerList = document.querySelector('.offer-list');
      offerList.innerHTML = '';
      copy.offers.forEach(offer => {
        const offerElement = document.createElement('li');
        offerElement.className = 'offer-item';
        offerElement.innerHTML = `<strong>${offer[0]}</strong>: ${offer[1]}<br><em>${offer[2]}</em>`;
        offerList.appendChild(offerElement);
      });

      document.querySelector('.safety-kicker').textContent = copy.safetyKicker;
      document.querySelector('.safety-title').textContent = copy.safetyTitle;

      const safetyList = document.querySelector('.safety-list');
      safetyList.innerHTML = '';
      copy.safety.forEach(safetyItem => {
        const safetyElement = document.createElement('li');
        safetyElement.className = 'safety-item';
        safetyElement.textContent = safetyItem;
        safetyList.appendChild(safetyElement);
      });

      document.querySelector('.document-title').textContent = copy.documentTitle;
      document.querySelector('.document-sub').textContent = copy.documentSub;
      document.querySelector('.document-text').textContent = copy.documentText;

      document.querySelector('.final-kicker').textContent = copy.finalKicker;
      document.querySelector('.final-title').textContent = copy.finalTitle;
    });
  });

  const menu = document.querySelector('.menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  if (menu && mobileNav) {
    menu.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
  }

  if (!reduced) {
    const loader = document.createElement('div');
    loader.className = 'msic-loader';
    loader.setAttribute('aria-label', 'Chargement du site MSIC');
    loader.innerHTML = '<div class="msic-loader-grid"></div><div class="msic-loader-ring"></div><div class="msic-loader-core"><img class="msic-loader-logo" src="https://uxmagic.blob.core.windows.net/public/project-documents/6b03133f0cc24b14d6639e42/ban2aicompte_gmail.com/1795363685468-11e606b9-Screenshot_From_2026-11-22_16-40-19-removebg-preview.png" alt=""><div class="msic-loader-label">MSIC INDUSTRIAL SYSTEMS</div></div><div class="msic-loader-micro">INITIALIZING INDUSTRIAL SYSTEMS</div><div class="msic-loader-track"></div>';
    document.body.prepend(loader);
    let loaderClosed = false;
    const closeLoader = () => {
      if (loaderClosed) return;
      loaderClosed = true;
      loader.classList.add('is-hidden');
      window.setTimeout(() => loader.remove(), 600);
    };
    if (document.readyState === 'complete') closeLoader();
    else {
      window.addEventListener('load', closeLoader, { once: true });
      window.setTimeout(closeLoader, 1400);
    }

    const cursor = document.createElement('div');
    cursor.className = 'technical-cursor';
    cursor.innerHTML = '<span class="technical-cursor-dot"></span>';
    document.body.appendChild(cursor);

    if (window.matchMedia('(pointer: fine)').matches) {
      let targetX = innerWidth / 2, targetY = innerHeight / 2, currentX = targetX, currentY = targetY;
      const move = event => { targetX = event.clientX; targetY = event.clientY; cursor.classList.add('is-visible'); };
      document.addEventListener('mousemove', move, { passive: true });
      const renderCursor = () => {
        currentX += (targetX - currentX) * 0.18;
        currentY += (targetY - currentY) * 0.18;
        cursor.style.transform = `translate(${currentX}px,${currentY}px) translate(-50%,-50%)`;
        requestAnimationFrame(renderCursor);
      };
      requestAnimationFrame(renderCursor);
      document.addEventListener('mouseleave', () => cursor.classList.remove('is-visible'));
      document.querySelectorAll('a, button, input, select, textarea').forEach(element => {
        element.addEventListener('mouseenter', () => cursor.classList.add(element.matches('button,.btn') ? 'is-button' : 'is-link'));
        element.addEventListener('mouseleave', () => cursor.classList.remove('is-link', 'is-button'));
      });
      document.querySelectorAll('.card,.equipment-card,.solution,.service-item,.industry-card').forEach(element => {
        element.addEventListener('mouseenter', () => cursor.classList.add('is-card'));
        element.addEventListener('mouseleave', () => cursor.classList.remove('is-card'));
      });
      document.querySelectorAll('img').forEach(element => {
        element.addEventListener('mouseenter', () => cursor.classList.add('is-image'));
        element.addEventListener('mouseleave', () => cursor.classList.remove('is-image'));
      });
    }
  }

  document.querySelectorAll('.section,.page-hero,.footer').forEach(element => element.classList.add('blueprint-grid'));
  document.querySelectorAll('.equipment-card').forEach(element => element.classList.add('scanning-effect'));
  document.querySelectorAll('.grid3,.grid2,.grid4,.service-grid,.equipment-grid,.industry-grid,.solution-grid,.resource-grid,.footer-grid,.timeline').forEach(element => element.classList.add('stagger-container'));
  document.querySelectorAll('.section h2,.page-hero h1,.grid2>div:first-child,.project-placeholder .copy').forEach(element => element.classList.add('reveal-up'));
  document.querySelectorAll('.hero>img,.page-hero>img').forEach(element => element.classList.add('parallax-element'));
  document.querySelectorAll('.card,.equipment-card,.service-item,.solution,.resource,.industry-card').forEach((element, index) => {
    element.classList.add('reveal-up');
    element.style.transitionDelay = `${Math.min(index % 6, 5) * 40}ms`;
  });
  document.querySelectorAll('.grid2>div:last-child,.lead').forEach(element => element.classList.add('reveal-right'));
  document.querySelectorAll('.project-placeholder .image').forEach(element => element.classList.add('reveal-clip'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
  document.querySelectorAll('.reveal,.reveal-up,.reveal-left,.reveal-right,.reveal-scale,.reveal-clip,.stagger-container,.footer,.timeline').forEach(element => observer.observe(element));

  const header = document.querySelector('.header');
  const onScroll = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
    if (!reduced && window.matchMedia('(min-width: 901px)').matches) {
      const shift = Math.min(window.scrollY * 0.055, 34);
      document.querySelectorAll('.hero>img,.page-hero>img').forEach(image => { if (!image.closest('.hero')) image.style.transform = `scale(1.025) translateY(${shift}px)`; });
      document.querySelectorAll('.blueprint-grid').forEach((section, index) => {
        if (section.getBoundingClientRect().top < innerHeight && section.getBoundingClientRect().bottom > 0) {
          section.style.backgroundPosition = `${index % 2 ? shift : -shift}px ${shift * 0.25}px`;
        }
      });
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Homepage motion enhancements: scroll progress, scroll cue, text reveal and blueprint title state.
  if (document.querySelector('.hero')) {
    const progress = document.createElement('div');
    progress.className = 'msic-scroll-progress';
    progress.innerHTML = '<span></span><em>MSIC · PAGE / 00</em>';
    document.body.appendChild(progress);

    progress.style.left = '0';
    progress.style.right = 'auto';
    progress.style.top = window.matchMedia('(max-width: 900px)').matches ? '72px' : '116px';
    progress.style.width = '3px';
    progress.style.height = window.matchMedia('(max-width: 900px)').matches ? 'calc(100vh - 72px)' : 'calc(100vh - 116px)';
    progress.style.border = '0';
    progress.style.borderRadius = '0';
    progress.style.background = 'rgba(20,71,150,.10)';
    progress.style.boxShadow = 'none';
    progress.style.position = 'fixed';
    progress.style.zIndex = '900';
    progress.style.contain = 'layout size';
    progress.style.pointerEvents = 'none';
    progress.style.overflow = 'hidden';

    const progressFill = progress.querySelector('span');
    const progressLabel = progress.querySelector('em');

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0;
      progressFill.style.height = `${percent}%`;
      progressLabel.textContent = `MSIC · PAGE / ${Math.round(percent).toString().padStart(2, '0')}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    const hero = document.querySelector('.hero');
    const cue = document.createElement('a');
    cue.className = 'hero-scroll-cue';
    cue.href = '#';
    cue.setAttribute('aria-label', 'Faire défiler vers les sections suivantes');
    cue.innerHTML = '<span>DÉFILER</span><i></i><iconify-icon icon="lucide:arrow-down"></iconify-icon>';
    cue.addEventListener('click', event => {
      event.preventDefault();
      const firstSection = hero.nextElementSibling;
      if (firstSection) firstSection.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
    });
    hero.appendChild(cue);

    const heroTitle = hero.querySelector('h1');
    if (heroTitle) {
      const words = heroTitle.textContent.trim().split(/\s+/);
      heroTitle.innerHTML = words.map(word => `<span class="hero-word">${word}</span>`).join(' ');
    }
  }

  document.querySelectorAll('.challenge-card,.intro-capabilities article,.equipment-directory a,.capability-grid a,.people-grid span,.offer-grid article,.safety-grid article,.process-flow article').forEach((element, index) => {
    element.classList.add('reveal-up');
    element.style.transitionDelay = `${(index % 6) * 55}ms`;
    observer.observe(element);
  });

  document.querySelectorAll('.section h2').forEach(title => {
    observer.observe(title);
  });

  if (!reduced) {
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
      if (link.hostname && link.hostname !== location.hostname) return;
      link.addEventListener('click', event => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#')) return;
        event.preventDefault();
        document.body.classList.add('page-exiting');
        window.setTimeout(() => { location.href = href; }, 180);
      });
    });
  }

  // Guaranteed hero visibility and left-edge scroll progress (inline overrides stale cache rules).
  const heroParagraph = document.querySelector('.hero p');
  const heroActions = document.querySelector('.hero-actions');
  if (heroParagraph) {
    heroParagraph.style.opacity = '1';
    heroParagraph.style.clipPath = 'none';
    heroParagraph.style.visibility = 'visible';
    heroParagraph.style.color = '#ffffff';
  }
  if (heroActions) {
    heroActions.style.opacity = '1';
    heroActions.style.clipPath = 'none';
    heroActions.style.visibility = 'visible';
    heroActions.style.transform = 'none';
    heroActions.style.zIndex = '20';
  }

  if (document.querySelector('.hero')) {
    const setHomeLanguage = (lang) => {
      const c = lang === 'fr' ? null : homeCopy[lang];
      document.querySelectorAll('[data-lang]').forEach(button => button.classList.toggle('active', button.dataset.lang === lang));
      document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
      if (!c) { localStorage.setItem('msic-language', lang); location.reload(); return; }

      const nav = document.querySelectorAll('.nav>a');
      nav.forEach((link, index) => { if (c.nav[index]) link.textContent = c.nav[index]; });
      document.querySelectorAll('.mobile-nav>a').forEach((link, index) => { if (c.nav[index]) link.textContent = c.nav[index]; });

      const setText = (selector, text) => { const el = document.querySelector(selector); if (el && text) el.textContent = text; };
      setText('.hero .eyebrow', c.eyebrow);
      if (document.querySelector('.hero h1')) document.querySelector('.hero h1').textContent = c.title;
      setText('.hero p', c.sub);
      const heroActions = document.querySelectorAll('.hero-actions a');
      heroActions.forEach((el, i) => { if (c.actions[i]) el.childNodes[0].nodeValue = c.actions[i] + ' '; });
      setText('.hero-scroll-cue span', c.scroll);

      setText('.intro-section .kicker', c.introKicker);
      setText('.intro-section h2', c.introTitle);
      setText('.intro-section .lead', c.introLead);
      setText('.intro-section .text-link', c.introLink);
      document.querySelectorAll('.intro-capabilities h3').forEach((el,i) => { if(c.introCards[i]) el.textContent=c.introCards[i]; });

      setText('.challenge-grid', null);
      const challengeSection = document.querySelector('.challenge-grid').closest('.section');
      setText('.challenge-grid', null);
      challengeSection.querySelectorAll('.kicker').forEach(el => el.textContent=c.challengeKicker);
      challengeSection.querySelectorAll('h2').forEach(el => el.textContent=c.challengeTitle);
      challengeSection.querySelectorAll('.section-heading p').forEach(el => el.textContent=c.challengeLead);
      challengeSection.querySelectorAll('.challenge-card').forEach((card,i) => {
        const data=c.challengeCards[i]; if(!data)return;
        card.querySelector('h3').textContent=data[0];
        const paragraphs=card.querySelectorAll('p');
        paragraphs[0].textContent=data[1]; paragraphs[0].prepend(document.createTextNode('')); 
        paragraphs[1].textContent=data[2];
        const link=card.querySelector('a'); if(link) link.childNodes[0].nodeValue=data[3]+' ';
      });

      const industrySection=document.querySelector('.industry-grid').closest('.section');
      industrySection.querySelectorAll('.kicker').forEach(el=>el.textContent=c.industryKicker);
      industrySection.querySelectorAll('h2').forEach(el=>el.textContent=c.industryTitle);
      industrySection.querySelectorAll('.text-link').forEach(el=>{el.childNodes[0].nodeValue=c.industryLink+' ';});
      industrySection.querySelectorAll('.industry-card').forEach((card,i)=>{if(c.industries[i]){card.querySelector('h3').textContent=c.industries[i][0];card.querySelector('p').textContent=c.industries[i][1];}});

      const capabilitySection=document.querySelector('.capability-grid').closest('.section');
      capabilitySection.querySelectorAll('.kicker').forEach(el=>el.textContent=c.capabilityKicker);
      capabilitySection.querySelectorAll('h2').forEach(el=>el.textContent=c.capabilityTitle);
      capabilitySection.querySelectorAll('.section-heading p').forEach(el=>el.textContent=c.capabilityLead);
      capabilitySection.querySelectorAll('.capability-grid h3').forEach((el,i)=>{if(c.capabilities[i])el.textContent=c.capabilities[i];});

      const equipmentSection=document.querySelector('.equipment-directory').closest('.section');
      equipmentSection.querySelectorAll('.kicker').forEach(el=>el.textContent=c.equipmentKicker);
      equipmentSection.querySelectorAll('h2').forEach(el=>el.textContent=c.equipmentTitle);
      equipmentSection.querySelectorAll('.text-link').forEach(el=>{el.childNodes[0].nodeValue=c.equipmentLink+' ';});
      equipmentSection.querySelectorAll('.equipment-directory a').forEach((el,i)=>{if(c.equipment[i]){el.querySelector('span').textContent=c.equipment[i][0];el.querySelector('small').textContent=c.equipment[i][1];}});

      const processSection=document.querySelector('.process-flow').closest('.section');
      processSection.querySelectorAll('.kicker').forEach(el=>el.textContent=c.processKicker);
      processSection.querySelectorAll('h2').forEach(el=>el.textContent=c.processTitle);
      processSection.querySelectorAll('.process-flow article').forEach((el,i)=>{if(c.process[i]){el.querySelector('h3').textContent=c.process[i][0];el.querySelector('p').textContent=c.process[i][1];}});

      const peopleSection=document.querySelector('.people-section');
      peopleSection.querySelectorAll('.kicker').forEach(el=>el.textContent=c.peopleKicker);
      peopleSection.querySelectorAll('h2').forEach(el=>el.textContent=c.peopleTitle);
      peopleSection.querySelectorAll('.lead').forEach(el=>el.textContent=c.peopleLead);
      peopleSection.querySelectorAll('.people-grid span').forEach((el,i)=>{if(c.people[i]){const icon=el.querySelector('iconify-icon');el.textContent=c.people[i];if(icon)el.prepend(icon);}});

      const projectSection=document.querySelector('.project-feature').closest('.section');
      projectSection.querySelectorAll('.kicker').forEach(el=>el.textContent=c.projectKicker);
      projectSection.querySelectorAll('h2').forEach(el=>el.textContent=c.projectTitle);
      projectSection.querySelectorAll('.section-heading p').forEach(el=>el.textContent=c.projectLead);
      setText('.project-status',c.projectStatus); setText('.project-details h3',c.projectName);
      projectSection.querySelectorAll('.project-details dt').forEach((el,i)=>{if(c.projectFields[i])el.textContent=c.projectFields[i];});
      projectSection.querySelectorAll('.project-details dd').forEach((el,i)=>{if(c.projectValues[i])el.textContent=c.projectValues[i];});

      const offerSection=document.querySelector('.offer-grid').closest('.section');
      offerSection.querySelectorAll('.kicker').forEach(el=>el.textContent=c.offerKicker);
      offerSection.querySelectorAll('h2').forEach(el=>el.textContent=c.offerTitle);
      offerSection.querySelectorAll('.offer-grid article').forEach((card,i)=>{if(c.offers[i]){card.querySelector('h3').textContent=c.offers[i][1];card.querySelectorAll('p')[0].textContent=c.offers[i][2];card.querySelectorAll('p')[1].textContent=c.offers[i][3];const btn=card.querySelector('.btn');if(btn)btn.textContent=c.quote;}});

      const safety=document.querySelector('.safety-section');
      safety.querySelectorAll('.kicker').forEach(el=>el.textContent=c.safetyKicker);
      safety.querySelectorAll('h2').forEach(el=>el.textContent=c.safetyTitle);
      safety.querySelectorAll('.grid2>div:first-child>p').forEach(el=>el.textContent=c.safetyLead);
      safety.querySelectorAll('.safety-grid h3').forEach((el,i)=>{if(c.safety[i])el.textContent=c.safety[i];});
      setText('.document-zone strong',c.documentTitle); setText('.document-zone span',c.documentSub); setText('.document-zone p',c.documentText);

      setText('.final-cta .kicker',c.finalKicker); setText('.final-cta h2',c.finalTitle); setText('.final-cta p',c.finalLead);
      document.querySelectorAll('.final-actions a').forEach((el,i)=>{if(c.finalActions[i])el.textContent=c.finalActions[i];});

      const topLink=document.querySelector('.topbar a'); if(topLink) topLink.textContent=c.nav[6]? (lang==='zh'?'下载公司简介':'Download company profile'):topLink.textContent;
      document.querySelectorAll('.header .btn-red').forEach(el=>el.textContent=lang==='zh'?'申请技术评估':'Request technical assessment');

      localStorage.setItem('msic-language',lang);
      window.dispatchEvent(new CustomEvent('msic-language-change',{detail:{lang}}));
    };

    const saved=localStorage.getItem('msic-language')||'fr';
    document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setHomeLanguage(button.dataset.lang)));
    if(saved!=='fr') setHomeLanguage(saved);
  }

  // Permanent visible fallback for hero cue and page rail.
  const heroCueFallback = document.querySelector('.hero-scroll-cue');
  if (heroCueFallback) {
    heroCueFallback.style.position = 'absolute';
    heroCueFallback.style.zIndex = '40';
    heroCueFallback.style.right = '34px';
    heroCueFallback.style.bottom = '30px';
    heroCueFallback.style.display = 'flex';
    heroCueFallback.style.opacity = '1';
    heroCueFallback.style.visibility = 'visible';
  }
  const railFallback = document.querySelector('.msic-scroll-progress');
  if (railFallback) {
    railFallback.style.position = 'fixed';
    railFallback.style.zIndex = '950';
    railFallback.style.left = '0';
    railFallback.style.right = 'auto';
    railFallback.style.top = window.matchMedia('(max-width:900px)').matches ? '72px' : '116px';
    railFallback.style.width = '3px';
    railFallback.style.height = window.matchMedia('(max-width:900px)').matches ? 'calc(100vh - 72px)' : 'calc(100vh - 116px)';
    railFallback.style.opacity = '1';
    railFallback.style.visibility = 'visible';
  }
})();