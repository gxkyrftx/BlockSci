Search.setIndex({docnames:["chain/AnyInputRange","chain/AnyOutputRange","chain/AnyTxRange","chain/block","chain/blockchain","chain/chain","chain/input","chain/output","chain/tx","changelog","clustering/cluster","clustering/cluster_manager","clustering/clustering","clustering/tagged_cluster","clustering/tagged_script","heuristics/heuristics","index","readme","scripts/MultisigScript","scripts/NonStandardScript","scripts/NulldataScript","scripts/PayToScriptHashScript","scripts/PubkeyScript","scripts/address","scripts/address_type","scripts/script","scripts/script_type","scripts/scripts"],envversion:53,filenames:["chain/AnyInputRange.rst","chain/AnyOutputRange.rst","chain/AnyTxRange.rst","chain/block.rst","chain/blockchain.rst","chain/chain.rst","chain/input.rst","chain/output.rst","chain/tx.rst","changelog.rst","clustering/cluster.rst","clustering/cluster_manager.rst","clustering/clustering.rst","clustering/tagged_cluster.rst","clustering/tagged_script.rst","heuristics/heuristics.rst","index.rst","readme.rst","scripts/MultisigScript.rst","scripts/NonStandardScript.rst","scripts/NulldataScript.rst","scripts/PayToScriptHashScript.rst","scripts/PubkeyScript.rst","scripts/address.rst","scripts/address_type.rst","scripts/script.rst","scripts/script_type.rst","scripts/scripts.rst"],objects:{"blocksci.Address":{__init__:[23,1,1,""],address_count:[23,1,1,""],balance:[23,1,1,""],from_string:[23,1,1,""],in_txes:[23,1,1,""],ins:[23,1,1,""],out_txes:[23,1,1,""],outs:[23,1,1,""],script:[23,2,1,""],txes:[23,1,1,""],with_prefix:[23,1,1,""]},"blocksci.AnyInputRange":{address:[0,2,1,""],address_type:[0,2,1,""],age:[0,2,1,""],all:[0,2,1,""],block:[0,2,1,""],sent_after:[0,1,1,""],sent_before:[0,1,1,""],sent_outside:[0,1,1,""],sent_within:[0,1,1,""],sequence_num:[0,2,1,""],spent_tx:[0,2,1,""],spent_tx_index:[0,2,1,""],tx:[0,2,1,""],value:[0,2,1,""],with_type:[0,1,1,""]},"blocksci.AnyOutputRange":{address:[1,2,1,""],address_type:[1,2,1,""],all:[1,2,1,""],block:[1,2,1,""],is_spent:[1,2,1,""],spending_tx:[1,2,1,""],spending_tx_index:[1,2,1,""],spent_after:[1,1,1,""],spent_before:[1,1,1,""],spent_outside:[1,1,1,""],spent_within:[1,1,1,""],tx:[1,2,1,""],unspent:[1,2,1,""],value:[1,2,1,""],with_type:[1,1,1,""]},"blocksci.AnyTxRange":{all:[2,2,1,""],block:[2,2,1,""],block_height:[2,2,1,""],block_time:[2,2,1,""],change_output:[2,2,1,""],fee:[2,2,1,""],fee_per_byte:[2,2,1,""],hash:[2,2,1,""],index:[2,2,1,""],input_count:[2,2,1,""],input_value:[2,2,1,""],inputs:[2,2,1,""],is_coinbase:[2,2,1,""],locktime:[2,2,1,""],op_return:[2,2,1,""],output_count:[2,2,1,""],output_value:[2,2,1,""],outputs:[2,2,1,""],size_bytes:[2,2,1,""]},"blocksci.Block":{__getitem__:[3,1,1,""],__getstate__:[3,1,1,""],__init__:[3,1,1,""],__iter__:[3,1,1,""],__len__:[3,1,1,""],__module__:[3,2,1,""],__repr__:[3,1,1,""],__setstate__:[3,1,1,""],bits:[3,2,1,""],coinbase_param:[3,2,1,""],coinbase_tx:[3,2,1,""],hash:[3,2,1,""],height:[3,2,1,""],input_count:[3,2,1,""],input_value:[3,2,1,""],inputs:[3,2,1,""],miner:[3,1,1,""],net_address_type_value:[3,1,1,""],net_full_type_value:[3,1,1,""],next_block:[3,2,1,""],nonce:[3,2,1,""],output_count:[3,2,1,""],output_value:[3,2,1,""],outputs:[3,2,1,""],prev_block:[3,2,1,""],size_bytes:[3,2,1,""],time:[3,2,1,""],timestamp:[3,2,1,""],total_spent_of_ages:[3,1,1,""],txes:[3,2,1,""],version:[3,2,1,""]},"blocksci.Blockchain":{__getitem__:[4,1,1,""],__iter__:[4,1,1,""],__len__:[4,1,1,""],filter_blocks:[4,1,1,""],filter_txes:[4,1,1,""],heights_to_dates:[4,1,1,""],map_blocks:[4,1,1,""],mapreduce_block_ranges:[4,1,1,""],mapreduce_blocks:[4,1,1,""],mapreduce_txes:[4,1,1,""],outputs_unspent:[4,2,1,""],range:[4,1,1,""],script_type_txes:[4,1,1,""],scripts:[4,1,1,""],segment:[4,1,1,""]},"blocksci.Input":{address:[6,2,1,""],address_type:[6,2,1,""],age:[6,2,1,""],block:[6,2,1,""],sequence_num:[6,2,1,""],spent_tx:[6,2,1,""],spent_tx_index:[6,2,1,""],tx:[6,2,1,""],value:[6,2,1,""]},"blocksci.MultisigScript":{addresses:[18,2,1,""],balance:[18,1,1,""],first_tx:[18,2,1,""],in_txes:[18,1,1,""],ins:[18,1,1,""],out_txes:[18,1,1,""],outs:[18,1,1,""],required:[18,2,1,""],revealed_tx:[18,2,1,""],script:[18,2,1,""],total:[18,2,1,""],txes:[18,1,1,""]},"blocksci.NonStandardScript":{balance:[19,1,1,""],first_tx:[19,2,1,""],in_script:[19,2,1,""],in_txes:[19,1,1,""],ins:[19,1,1,""],out_script:[19,2,1,""],out_txes:[19,1,1,""],outs:[19,1,1,""],revealed_tx:[19,2,1,""],script:[19,2,1,""],txes:[19,1,1,""]},"blocksci.NulldataScript":{balance:[20,1,1,""],data:[20,2,1,""],first_tx:[20,2,1,""],in_txes:[20,1,1,""],ins:[20,1,1,""],out_txes:[20,1,1,""],outs:[20,1,1,""],revealed_tx:[20,2,1,""],script:[20,2,1,""],txes:[20,1,1,""]},"blocksci.Output":{address:[7,2,1,""],address_type:[7,2,1,""],block:[7,2,1,""],is_spent:[7,2,1,""],spending_tx:[7,2,1,""],spending_tx_index:[7,2,1,""],tx:[7,2,1,""],value:[7,2,1,""]},"blocksci.PayToScriptHashScript":{address:[21,2,1,""],balance:[21,1,1,""],first_tx:[21,2,1,""],in_txes:[21,1,1,""],ins:[21,1,1,""],out_txes:[21,1,1,""],outs:[21,1,1,""],raw_address:[21,2,1,""],revealed_tx:[21,2,1,""],script:[21,2,1,""],txes:[21,1,1,""],wrapped_address:[21,2,1,""],wrapped_script:[21,2,1,""]},"blocksci.PubkeyScript":{address_string:[22,2,1,""],balance:[22,1,1,""],first_tx:[22,2,1,""],in_txes:[22,1,1,""],ins:[22,1,1,""],out_txes:[22,1,1,""],outs:[22,1,1,""],pubkey:[22,2,1,""],pubkeyhash:[22,2,1,""],revealed_tx:[22,2,1,""],script:[22,2,1,""],txes:[22,1,1,""]},"blocksci.Script":{balance:[25,1,1,""],in_txes:[25,1,1,""],ins:[25,1,1,""],out_txes:[25,1,1,""],outs:[25,1,1,""],script:[25,2,1,""],txes:[25,1,1,""]},"blocksci.Tx":{block:[8,2,1,""],block_height:[8,2,1,""],block_time:[8,2,1,""],change_output:[8,2,1,""],fee:[8,2,1,""],fee_per_byte:[8,2,1,""],hash:[8,2,1,""],index:[8,2,1,""],input_count:[8,2,1,""],input_value:[8,2,1,""],inputs:[8,2,1,""],ins:[8,2,1,""],is_coinbase:[8,2,1,""],locktime:[8,2,1,""],op_return:[8,2,1,""],output_count:[8,2,1,""],output_value:[8,2,1,""],outputs:[8,2,1,""],outs:[8,2,1,""],size_bytes:[8,2,1,""]},"blocksci.address_type":{multisig:[24,2,1,""],nonstandard:[24,2,1,""],nulldata:[24,2,1,""],pubkey:[24,2,1,""],pubkeyhash:[24,2,1,""],scripthash:[24,2,1,""],types:[24,2,1,""],witness_pubkeyhash:[24,2,1,""],witness_scripthash:[24,2,1,""]},"blocksci.blocksci_interface":{heuristics:[15,3,0,"-"]},"blocksci.blocksci_interface.heuristics":{change_by_address_reuse:[15,4,1,""],change_by_client_change_address_behavior:[15,4,1,""],change_by_locktime:[15,4,1,""],change_by_optimal_change:[15,4,1,""],change_by_peeling_chain:[15,4,1,""],change_by_power_of_ten_value:[15,4,1,""],change_by_script_type:[15,4,1,""],change_script_type_txes:[15,4,1,""],coinjoin_txes:[15,4,1,""],is_change_over:[15,4,1,""],is_coinjoin:[15,4,1,""],is_definite_coinjoin:[15,4,1,""],is_keyset_change:[15,4,1,""],is_script_deanon:[15,4,1,""],keyset_change_txes:[15,4,1,""],possible_coinjoin_txes:[15,4,1,""],script_deanon_txes:[15,4,1,""],unique_change_by_address_reuse:[15,4,1,""],unique_change_by_client_change_address_behavior:[15,4,1,""],unique_change_by_locktime:[15,4,1,""],unique_change_by_optimal_change:[15,4,1,""],unique_change_by_peeling_chain:[15,4,1,""],unique_change_by_power_of_ten_value:[15,4,1,""],unique_change_by_script_type:[15,4,1,""]},"blocksci.cluster_python":{Cluster:[10,0,1,""],ClusterManager:[11,0,1,""],TaggedCluster:[13,0,1,""],TaggedScript:[14,0,1,""]},"blocksci.cluster_python.Cluster":{script_count:[10,1,1,""],scripts:[10,2,1,""],tagged_scripts:[10,1,1,""]},"blocksci.cluster_python.ClusterManager":{cluster_count:[11,1,1,""],cluster_sizes:[11,1,1,""],cluster_with_address:[11,1,1,""],cluster_with_script:[11,1,1,""],clusters:[11,1,1,""],tagged_clusters:[11,1,1,""]},"blocksci.cluster_python.TaggedCluster":{cluster:[13,2,1,""],tagged_addresses:[13,2,1,""]},"blocksci.cluster_python.TaggedScript":{script:[14,2,1,""],tag:[14,2,1,""]},"blocksci.script_type":{multisig:[26,2,1,""],nonstandard:[26,2,1,""],nulldata:[26,2,1,""],pubkey:[26,2,1,""],scripthash:[26,2,1,""],types:[26,2,1,""]},blocksci:{Address:[23,0,1,""],AnyInputRange:[0,0,1,""],AnyOutputRange:[1,0,1,""],AnyTxRange:[2,0,1,""],Block:[3,0,1,""],Blockchain:[4,0,1,""],Input:[6,0,1,""],MultisigScript:[18,0,1,""],NonStandardScript:[19,0,1,""],NulldataScript:[20,0,1,""],Output:[7,0,1,""],PayToScriptHashScript:[21,0,1,""],PubkeyScript:[22,0,1,""],Script:[25,0,1,""],Tx:[8,0,1,""],address_type:[24,0,1,""],script_type:[26,0,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","module","Python module"],"4":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:module","4":"py:function"},terms:{"128k":[],"140gb":[],"1f9b8364":[],"1z3":[],"1ze":[],"1zu3m5":[],"1zy":[],"2xlarg":17,"7cf38706":17,"abstract":23,"break":17,"byte":[2,3,8],"catch":17,"char":17,"class":[0,1,2,3,4,6,7,8,10,11,13,14,16,18,19,20,21,22,23,24,25,26],"const":[11,17],"default":[17,18,19,20,21,22,23,25],"enum":[4,23],"final":[],"float":15,"function":[0,1,3,4,9,15],"import":17,"int":[0,1,3,4,10,11,15,17,18,19,20,21,22,23,25],"m\u00f6ser":17,"new":17,"null":[2,8,16,27],"public":[9,22],"return":[0,1,2,3,4,7,8,9,10,11,13,14,15,18,19,20,21,22,23,25],"true":[2,8,11,15],"void":[3,4,11],AWS:17,But:17,CNS:17,For:[0,1,2,9,17],One:17,The:[0,1,2,6,7,8,9,11,17,18,19,20,21,22],There:17,Uses:15,Using:16,With:17,__getitem__:[3,4],__getstate__:3,__init__:[3,23],__iter__:[3,4],__len__:[3,4],__module__:3,__repr__:3,__setstate__:3,about:[9,17,18,19,20,21,22],abov:9,access:[9,15,17],accompani:17,acheiv:9,acid:17,activ:17,actual:17,add:[15,17],added:9,addit:[],addition:[9,17],address:[0,1,2,3,6,7,8,9,11,15,16,17,18,19,20,21,22,27],address_count:23,address_str:[9,22],address_typ:[0,1,3,4,6,7,24],addresstyp:23,advantag:17,after:[0,1,3,17],again:17,against:17,age:[0,3,6],algorithm:15,align:9,alishah:17,all:[0,1,2,3,4,8,9,10,11,15,17,18,19,20,21,22,23,24,25,26],allow:[4,9],along:[],also:[9,17],altcoin:17,altern:17,although:[],amazon:16,amazonaw:17,ami:[9,17],amount:[9,17],analysi:16,ani:[9,10,11,15],anoth:9,any_view:[3,4],anyinputrang:[0,3],anyoutputrang:[1,3],anytxrang:[2,3],api:17,appear:15,append:17,appl:[],applic:17,approxim:[],apt:17,arg0:[0,1,3,4,10,11,15,23],arg1:[4,15,23],arg2:[4,15],arg3:15,arg:[0,1,3,4,15],argc:17,argv:17,arriv:[2,8],arvind:17,arxiv:17,associ:[14,18,19,20,21,22,23,25],attach:[0,1,6,7],attr:[],autoconf:17,autogen:17,automat:17,autoreconf:17,avail:[9,17],balanc:[18,19,20,21,22,23,25],base:[0,1,6,7,9],bash:17,basic:15,been:[1,7,9,13,14,15,17],befor:[0,1,3],begin:17,behavior:[9,15],being:[],below:[9,17],benchmark:[],between:[0,6,9,17],beyond:9,bin:17,binari:17,bind:17,bit:[2,3,8,21,22],bitcoin:[9,15,17,21,22],bitcoind:17,blank:[],block:[0,1,2,4,5,6,7,8,9,15,16],block_height:[2,8],block_tim:[2,8],blockchain:[3,5,9,15,16,17],blockchain_pars:17,blockcsi:9,blockfunc:4,blocksci:[0,1,2,3,4,6,7,8,9,10,11,13,14,15,18,19,20,21,22,23,24,25,26],blocksci_interfac:[0,1,3,4,10,11,15,18,19,20,21,22,23,25],blocksci_pars:[4,17],bool:15,boot:17,both:9,boundari:9,bring:9,browser:17,bug:17,build:17,built:17,busi:17,bypass:[],calcul:[18,19,20,21,22,23,25],call:[9,11],came:9,can:[2,8,9,17,18,23],capabl:17,categori:[3,4],caus:9,certain:3,certif:[],chain:[3,4,15,16,17,18,19,20,21,22,23,25],chang:[2,3,8,15,17],change_by_address_reus:15,change_by_client_change_address_behavior:[9,15],change_by_locktim:15,change_by_optimal_chang:15,change_by_peeling_chain:15,change_by_power_of_ten_valu:15,change_by_script_typ:15,change_output:[2,8],change_script_type_tx:15,changelog:[],charg:17,chator:17,check:15,checkout:[],chunk:4,circumst:9,citp:17,client:15,clone:17,closer:9,cluster:[11,16],cluster_count:11,cluster_python:[10,11,13,14],cluster_s:11,cluster_with_address:11,cluster_with_script:11,clustermanag:[12,16],cmake:17,code:17,coin:[15,17,25],coinbas:[2,3,8],coinbase_param:3,coinbase_tx:3,coinjoin:15,coinjoin_tx:15,coinjoinresult:15,com:17,come:[3,9,17],command:17,common:9,compar:9,compil:16,comput:17,concept:9,configur:17,connect:[],construct:[17,23],consumpt:9,contact:16,contain:[0,1,2,3,6,7,8,9,11,14,15,17,20],content:16,continu:9,control:15,contruct:4,conveni:17,copi:9,core:[9,15,17],correct:9,correspond:9,corrupt:9,cost:[9,11],cpp:[9,17],cpu_count:4,crash:9,creat:[0,3,17],creation:3,criteria:[2,4,8],crucial:17,cryptocurr:17,currenc:[0,1,6,7],current:[9,15,17],custom:17,dat:11,data:[2,3,4,8,16,17,18,19,21,22,25,27],databas:17,datepars:17,datetim:3,dcmake_build_typ:17,deanonym:15,decid:15,demo:17,demonstr:17,depend:17,describ:17,design:17,detail:[11,17],detect:15,determin:[2,8,15],dev:17,devic:[],devlic:[],dge:17,dict:[3,10,11],dictionari:[10,11],differ:[9,15,17],difficult:9,difficulti:3,digit:15,direct:4,directli:[17,23],directori:17,disk:17,distinct:[9,15],distinguish:9,divid:4,document:9,doe:17,doesn:17,domain:17,don:17,down:17,download:17,drastic:[],due:9,dynam:17,each:[0,1,2,4],easier:9,ec2:[9,16],ecosystem:17,edu:17,elimin:[],enabl:17,end:4,entir:[],enumer:[24,26],error:[],essenti:17,everi:[9,17],exampl:[9,17],exec:17,exist:[15,17],exit:9,expect:[],explain:17,explor:17,express:17,extra:[18,19,20,21,22],extract:17,fast:17,faster:[],featur:15,fee:[2,8,15],fee_per_byt:[2,8],feedback:9,feel:17,fellowship:17,few:17,figur:9,file:[4,9,17],file_path_to_output:17,file_path_to_parser_output:17,filenam:[],filter_block:4,filter_tx:4,filterfunc:4,finish:17,fio:[],first:[15,17,18,19,20,21,22],first_tx:[18,19,20,21,22],fix:17,folder:17,follow:[3,17],forget:17,fork:[],form:9,format:17,forward:17,free:17,fresh:[2,8,15],from:[3,9,15,17,18,19,20,21,22,23,25],from_str:[9,23],full:[3,9,17,18,19,20,21,22,23,25],further:[],futur:9,gcc:17,gener:[4,15,17],get:[10,11,17,18,19,20,21,22,23],getclust:11,git:17,github:17,give:17,given:[0,1,3,4,9,10,11,17,23],goe:9,goldfed:17,graduat:17,grant:17,grow:17,guarante:[9,17],guess:9,handl:9,harri:17,has:[1,2,7,8,9,13,14,15,17],hash:[2,3,8,9,21,22],hash_str:9,have:[9,13,15,17],header:[3,9,17],height:[0,1,2,3,4,8,15,18,19,20,21,22,23,25],heights_to_d:4,held:[18,19,20,21,22,23,25],here:17,heurist:[9,16],hour:17,hourli:17,how:17,howev:[9,17],hpp:17,http:17,hyperleveldb:17,identif:9,identifi:23,illustr:17,imag:[9,17],immedi:17,improv:[9,17],in_script:19,in_tx:[18,19,20,21,22,23,25],includ:[0,1,2,3,4,8,9,17],increas:[],increment:9,index:[0,1,2,6,7,8,16,23],indic:15,info:16,inform:9,infrastructur:17,init:[4,17],initi:[4,9],input:[1,2,3,5,7,8,9,15,16,17,18,19,20,21,22,23,25],input_count:[2,3,8],input_valu:[2,3,8],ins:[8,18,19,20,21,22,23,25],insert:17,insid:[9,13,20,21],insight:17,instabl:9,instal:17,instanc:[9,17],instant:17,instead:17,instruct:16,intention:[],interfac:[9,17],intern:[2,8],interpret:17,interprett:17,intervent:17,introduc:9,involv:[9,15,18,19,20,21,22,23,25],iodepth:[],ioengin:[],iota_view:11,is_change_ov:15,is_coinbas:[2,8],is_coinjoin:[9,15],is_definite_coinjoin:15,is_keyset_chang:15,is_script_deanon:15,is_spent:[1,7],issu:[9,17],iter:[3,4,9,10],its:[2,8,17],joinmarket:15,jupyt:17,kalodn:17,kei:[9,15,17,18,22],keyset_change_tx:15,known:[9,17],kwarg:[0,1,3,4,15],label:9,lambda:11,larg:9,larger:15,lastusedd:[],later:1,latest:16,launch:[9,17],lazi:11,ldconfig:17,lead:9,left:[],less:0,lib:17,libaio:[],libargtable2:17,libboost:17,libcurl4:17,libhiredi:17,libjsoncpp:17,libjsonrpccpp:17,liblmdb:17,libmicrohttpd:17,librari:[9,16],libsparsehash:17,libsqlite3:17,libssl:17,like:[15,17],limit:15,line:[],link:[0,1,6,7],linux:9,list:[0,1,2,3,4,8,10,11,13,15,17,18,19,20,21,22,23,25],load:17,loc:4,local:[9,16],localhost:17,locktim:[2,8,15],log:17,longer:9,look:9,lookup:[],lsblk:[],mac:9,machin:17,made:17,mai:9,main:[9,17],make:[9,17],malt:17,manag:11,mani:[9,17],manner:17,map:[4,9],map_block:4,mapfunc:4,mapreduce_block:4,mapreduce_block_rang:4,mapreduce_tx:4,massiv:17,match:[4,15],matplotlib:17,max:3,maxdepth:15,mean:17,meanwhil:17,memori:[9,17],meta:17,method:11,might:15,miner:[3,17],minor:17,minut:17,mkdir:17,mode:17,model:17,modul:[9,16,17],more:[0,17],most:[9,15,17],move:9,multi:18,multipl:[9,15],multiprocess:17,multisig:[9,16,24,26,27],multisignatur:9,multisigscript:18,multithread:[4,9],must:17,name:17,namecoin:17,narayanan:17,navig:17,need:[15,17],net:3,net_address_type_valu:3,net_full_type_valu:3,network:17,never:1,next:17,next_block:3,node:17,non:[16,27],nonc:3,none:[1,2,3,4,7,8,15,23],nonstandard:[19,24,26],nonstandardscript:19,note:[16,17],notebook:17,now:9,nsf:17,nulldata:[24,26],nulldatascript:20,number:[0,1,2,3,4,6,8,10,11,15,17,18,23],object:[0,1,2,3,9,10,11,13,14,17,23],observ:17,occasion:9,old:9,onc:17,one:[3,15],onli:[0,9,15,17],op_return:[2,8,20],open:17,openssl:17,oper:[9,17],optim:17,option:[15,23],order:[9,15,17],org:17,origin:[],orphan:9,other:17,otherwis:[2,8],our:[9,17],out:[8,9,18,19,20,21,22,23,25],out_script:19,out_tx:[18,19,20,21,22,23,25],outpu:15,output:[0,2,3,4,5,6,8,9,15,16,17,18,19,20,21,22,23,25],output_count:[2,3,8],output_valu:[2,3,8],outputs_unsp:4,over:[4,9,10],overload:[0,1,3,4,15],p2pkh:[9,15],p2sh:[9,15,21],page:16,pai:[9,16,22,27],paid:[2,8],panda:17,paper:[9,17],pars:[9,17],parser:9,pass:[4,17,23],password:17,path:[4,17],paytoscripthashscript:21,pdf:17,peel:15,pem:17,peopl:[],perform:17,phase:9,pip3:17,pip:17,place:15,plan:9,pool:3,port:17,possess:9,possibl:15,possible_coinjoin_tx:15,potenti:15,ppa:17,present:9,prev_block:3,prevent:15,previou:9,previous:9,princeton:17,privat:17,produc:[9,17],protocol:3,provid:[9,17],psc:[],psd:[],psutil:17,pubkei:[9,16,24,26,27],pubkeyhash:[22,24],pubkeyscript:22,purpos:17,pycrypto:17,python3:17,python:9,queri:[9,17],quick:16,quickli:15,quit:11,quri:17,random:9,rang:[3,4,5,11,16,17],rapid:17,ratio:[2,8],raw_address:21,reach:17,read:[9,17],readi:17,receiv:[],recomend:17,recommend:17,recoveri:17,recurs:17,reduc:4,reducefunc:4,regard:17,relat:9,releas:16,remot:17,reorg:9,replac:[],repo:17,report:9,repositori:17,repres:[3,4,6,7,8,10,23,25],requir:[9,17,18],rerun:9,rescrv:17,research:17,resolv:[9,17],resourc:[],respect:9,result:[4,9],reus:15,reveal:[18,19,20,21,22],revealed_tx:[18,19,20,21,22],roughli:[4,9],rpc:17,run:[4,9,17],safe:[],same:[4,9,15,17],scratch:9,script:[0,1,2,4,8,9,10,11,12,13,15,16,23],script_count:10,script_deanon_tx:15,script_num:[],script_typ:[0,1,4,10,26],script_type_tx:4,scriptaddress:4,scripthash:[16,24,26,27],scripttyp:4,search:16,sec:9,second:[9,17],secp256k1:17,see:17,segment:4,segwit:[],select:15,self:[0,1,3,4,10,11,18,19,20,21,22,23,25],send:15,sent:[0,1,9,18,19,20,21,22,23,25],sent_aft:0,sent_befor:0,sent_outsid:0,sent_within:0,separ:9,sequenc:[0,6],sequence_num:[0,6],serial:17,server:[9,17],set:[3,15,17],setup:16,share:15,should:17,shown:9,shut:17,sign:18,signatur:18,similar:9,simpli:[9,17],sinc:17,singl:9,situat:9,size:[2,3,8,11],size_byt:[2,3,8],slave:17,slice:[3,4],slow:11,slower:[],slowli:17,small:9,smaller:15,smallest:15,snipe:15,softwar:[],some:[9,15],somewhat:9,soon:17,specif:9,specifi:3,speed:17,spending_tx:[1,7],spending_tx_index:[1,7],spent:[0,1,3,6,7,9,15,18,19,20,21,22,23,25],spent_aft:1,spent_befor:1,spent_outsid:1,spent_tx:[0,6],spent_tx_index:[0,6],spent_within:1,split:3,ssh:17,standard:[16,27],start:[4,17],startup:17,step:17,steven:17,still:9,str:[3,10,11,23],stream:4,string:[4,9,21,22,23],structur:[15,17],submodul:17,subsequ:[],subset:[0,1,15],substanti:9,sudo:17,suffer:17,sum:[2,3,8],support:17,tabl:9,tag:[10,11,12,16],tagged_address:13,tagged_clust:11,tagged_script:10,taggedclust:[11,13],taggedscript:[10,14],take:17,take_exactly_view_:11,tar:17,team:16,temporarli:17,test:17,than:[0,1,15,17],thi:[0,1,2,3,4,6,7,8,9,11,15,17,18,19,20,21,22,23,25],thread:9,threshold:3,through:17,thu:17,time:[2,3,8,9,17],timestamp:3,tool:17,toolchain:17,total:[3,4,11,15,18,23],total_spent_of_ag:3,tranasct:[1,7],transact:[0,1,2,3,4,6,7,8,9,15,17,18,19,20,21,22,23,25],transasct:[2,8],transform:17,transform_view:11,travers:17,tunnel:17,tupl:[3,15],two:[9,17],txe:[3,18,19,20,21,22,23,25],type:[0,1,3,4,6,7,9,10,15,16,23,27],ubuntu:17,uncommon:9,under:[9,17],union:4,uniqu:[15,23],unique_change_by_address_reus:15,unique_change_by_client_change_address_behavior:15,unique_change_by_locktim:15,unique_change_by_optimal_chang:15,unique_change_by_peeling_chain:15,unique_change_by_power_of_ten_valu:15,unique_change_by_script_typ:15,univers:17,unnecessari:17,unsign:11,unspent:[1,4,7],unsupport:9,updat:[9,17],upgrad:17,use:17,used:[9,17],user:17,usernam:17,uses:[15,17],using:[9,16],usr:17,util:[],utxo:3,valu:[0,1,2,3,6,7,8,15],varieti:17,variou:[],veri:9,version:[3,17],via:[2,8,9],volum:[],wai:9,want:17,web:17,well:17,were:[1,3,9],wget:17,when:[9,17],where:[9,17,18,19,20,21,22,23,25],whether:[1,7,15],which:[0,1,3,4,7,9,13,14,15,17,23,25],whichev:17,window:17,wit:9,with_prefix:23,with_typ:[0,1],within:[1,3,17],without:[],witness_pubkeyhash:24,witness_scripthash:24,work:[9,17],would:[9,17],wouldn:15,wrap:[9,18,19,20,21,22],wrapped_address:21,wrapped_script:21,written:17,xvda:[],xzf:17,you:[9,17],your:[4,17],your_private_kei:17,your_url:17},titles:["Input Range","Output Range","Tx Range","Block","Blockchain","Chain Classes","Input","Output","Tx","Release notes","Cluster","ClusterManager","Clustering","Tagged Cluster","Tagged Script","Heuristics","BlockSci Version 0.3 Documentation","BlockSci","Multisig Script","Non-Standard Script","Null Data Script","Pay to ScriptHash Script","Pubkey Script","Address","Address Type","Script","Script Type","Script Classes"],titleterms:{"class":[5,27],"new":9,"null":20,Using:17,addit:9,address:[23,24],amazon:17,analysi:17,api:9,block:3,blockchain:4,blocksci:[16,17],bug:9,chain:5,chang:9,changelog:[],cluster:[10,12,13],clustermanag:11,compil:17,contact:17,data:[9,20],document:[16,17],ec2:17,fix:9,format:9,heurist:15,increas:9,index:9,indic:16,info:17,input:[0,6],instruct:17,latest:17,librari:17,limit:9,local:17,lookup:9,multisig:18,non:19,note:9,old:16,output:[1,7],pai:21,parser:17,perform:9,pubkei:22,python:17,quick:17,rang:[0,1,2],releas:[9,17],script:[14,18,19,20,21,22,25,26,27],scripthash:21,segwit:9,setup:17,standard:19,support:9,tabl:16,tag:[13,14],team:17,type:[24,26],using:17,version:[9,16]}})