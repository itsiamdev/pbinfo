#include <fstream>
using namespace std;

int main()
{
    int P,I;
    ifstream f("parimpar2.in");
    ofstream g("parimpar2.out");
    f>>I>>P;
    int n,NrP=0,NrI=0,p,i;
    bool gasitP=false,gasitI=false;
    while(f>>n)
    {
        if(n%2==0)
            ++NrP;
        else
            ++NrI;
        if(NrP==P&&!gasitP)
            p=n,gasitP=true;
        if(NrI==I&&!gasitI)
            i=n,gasitI=true;
    }
    f.close();
    if(NrP<P||NrI<I)
        g<<"Nu Exista";
    else
        g<<p<<' '<<i<<'\n';
    g.close();
    return 0;
}