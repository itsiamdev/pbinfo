#include <iostream>
using namespace std;
int main()
{
    unsigned long long int a,p,s,lim=18446744073709551615ULL;
    int n,m,i,j,k,b,okp,oks;
    cin>>n; // Citesc n
    for(i=1;i<=n;i++)
    {
        cin>>m; // Citesc m
        s=0,oks=1;
        for(j=1;j<=m;j++) // Citesc cele m perechi de numere (a si b) si verific
        {
            cin>>a>>b; // Citesc a si b
            p=1; // Initial produsul p este 1 si calculez a^b(p=a*a*a...*a de b ori)
            okp=1; // Presupunem ca produsele nu depasesc limita "lim"
            for(k=1;k<=b;k++) // Fac produsul p=a*a*...*a (de b ori)
            {
                if(a==0) // Daca a=0, atunci a^b este 0
                {
                    p=0; // 0^b=0 (deci p=0)
                    break;
                }
                else // a!=0
                {
                    if(a==1) // Daca a=1, atunci a^b=1 (p=1*1*...*1=1)
                    {
                        p=1;
                        break;
                    }
                    if(a==2) // Daca a=2
                    {
                        if(b<64) // Aici a=2 si daca b<64 => a^b se obtine prin b deplasari la stanga
                                p=(unsigned long long int)1<<b;
                        else
                            okp=0; // Daca a=2 si b>=64 => Overflow
                        break;
                    } // a diferit de 1 si de 2
                    if(b==0) // Daca b=0, atunci a^b=1 => p=1
                    {
                        p=1;
                        break;
                    } // Daca b diferit de 0 iar a diferit atat de 1 cat si de 2
                    if(b==1) // Daca b=1, atunci a^1=a => p=a
                    {
                        p=a;
                        break;
                    } // In celelalte cazuri procedam normal
                    if(a>lim/p) // Daca p*a depaseste limita lim
                    {
                        okp=0;
                        while(j<m)
                            cin>>a>>b,++j;
                        break;
                    }
                    else // Se poate face produsul p*a fara a deoasi limita lim
                        p*=a;
                }
            }
            if(okp) // Daca produsul a putut fi calculat
            {
                if(s<=lim-p) // Daca se poate aduna produsul p la suma s
                    s+=p;
                else // Adunand p la s avem depasire
                {
                    oks=0;
                    cout<<"Overflow!\n";
                    break;
                }
            }
            else // Produsul ar fi produs depasire
            {
                cout<<"Overflow!\n";
                break;
            }
        }
        if(okp&&oks) // Daca totul a decurs normal (produsele n-au creat depasire si nisi suma)
            cout<<s<<'\n'; // Se afiseaza suma s
    }
    return 0;
}